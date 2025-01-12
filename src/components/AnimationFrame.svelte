<script lang="ts">
	import { onMount } from 'svelte';
	import { brideName } from '../resource/input';
	import { groomName } from '../resource/input';

	export let isHeartMode: boolean;

	// a bunch of variables defining the love and how it falls
	const LOVEFLAKES_COUNT = 120; // on firefox should go smoothly up to 750
	const LOVEFLAKE_MIN_SCALE = 0.1;
	const MELTING_SPEED = 1.12;
	const WIND_FORCE = 0.01;
	const FALL_SPEED = 0.15;
	let LOVE_ICONS = ['♡', '♥', '❤️', '❣️', '💕'];
	if (!isHeartMode) {
		LOVE_ICONS = [groomName, brideName];
	}

	const TARGET_FPS = 60;

	const MS_BETWEEN_FRAMES = 1000 / TARGET_FPS;

	interface SnowFlakeItem {
		scale: number;
		x: number;
		y: number;
		rotation: number;
		loveIcon: any;
		opacity: any | undefined;
	}

	// this function generates the random configuration with all necessary values
	function randomLoveflakeConfig(i: number): SnowFlakeItem {
		return {
			scale: LOVEFLAKE_MIN_SCALE + Math.random() * (1 - LOVEFLAKE_MIN_SCALE),
			x: -20 + Math.random() * 120,
			y: -100 + Math.random() * 200,
			rotation: Math.floor(Math.random() * 360),
			loveIcon: LOVE_ICONS[i % LOVE_ICONS.length],
			opacity: 0.999
		};
	}

	// actially generating the loveflakes
	let loveflakes = new Array(LOVEFLAKES_COUNT)
		.fill(undefined)
		.map((_, i) => randomLoveflakeConfig(i))
		.sort((a, b) => a.scale - b.scale);

	// in onMount we define the loop function and start our animationFrame loop.
	onMount(() => {
		let frame: number;
		let lastTime: number;

		function loop(timestamp: number | undefined) {
			frame = requestAnimationFrame(loop);

			let framesCompleted: number;
			if (timestamp === undefined) {
				framesCompleted = 1;
			} else {
				const elapsed = timestamp - lastTime;
				lastTime = timestamp;

				framesCompleted = elapsed / MS_BETWEEN_FRAMES;
			}

			if (isNaN(framesCompleted)) {
				framesCompleted = 1;
			}

			loveflakes = loveflakes.map((flake) => {
				if (flake.y >= 100) {
					flake.opacity = Math.pow(flake.opacity, MELTING_SPEED);
				} else {
					flake.y += FALL_SPEED * flake.scale * framesCompleted;
					flake.x += WIND_FORCE * flake.scale * framesCompleted;
					flake.rotation += 1 * framesCompleted;
				}
				if (flake.opacity <= 0.02) {
					flake.y = -20;
					flake.x = -20 + Math.random() * 120;
					flake.opacity = 0.999;
				}
				return flake;
			});
		}

		loop(undefined);

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="loveframe" aria-hidden="true">
	{#each loveflakes as flake}
		<div
			class="loveflake"
			style={`opacity: ${flake.opacity}; transform: scale(${flake.scale}) rotate(${flake.rotation}deg); left: ${flake.x}%; top: calc(${flake.y}% - ${flake.scale}rem)`}
		>
			{flake.loveIcon}
		</div>
	{/each}
</div>

<style>
	:global(body) {
		min-height: 100%;
	}

	:global(html) {
		height: 100%;
	}

	.loveflake {
		color: #ffffff;
		font-size: 1.2rem;
		line-height: 1.2rem;
		position: absolute;
		z-index: 1000;
		overflow: hidden;
	}

	.loveframe {
		pointer-events: none;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}
</style>
