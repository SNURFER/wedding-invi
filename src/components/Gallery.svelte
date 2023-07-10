<script lang="ts">
	import { onMount } from 'svelte';

	let images: string[] = [
		'image/1.jpeg',
		'image/2.jpeg'
		// 'image/3.jpeg',
		// 'image/4.jpeg',
		// 'image/5.jpeg',
		// 'image/7.jpeg',
		// 'image/8.jpeg',
		// 'image/9.jpeg',
		// 'image/10.jpeg',
		// 'image/11.jpeg',
		// 'image/12.jpeg',
		// 'image/13.jpeg',
		// 'image/14.jpeg',
		// 'image/15.jpeg',
		// 'image/16.jpeg',
		// 'image/17.jpeg'
		// Add more image URLs as needed
	];

	let currentIndex = 0;
	let startX = 0;

	function handleTouchStart(event: TouchEvent) {
		startX = event.touches[0].clientX;
	}

	function handleTouchEnd(event: TouchEvent) {
		const deltaX = event.changedTouches[0].clientX - startX;

		if (deltaX > 50) {
			// Swipe right
			currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
		} else if (deltaX < -50) {
			// Swipe left
			currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
		}
	}

	onMount(() => {
		// Clean up the component when it is unmounted
		return () => {
			// Reset the currentIndex and startX variables
			currentIndex = 0;
			startX = 0;
		};
	});
</script>

<!-- <div class="flex flex-col items-center"> -->
<div class="py-10 mx-auto px-10">
	<h1 class="mb-8 text-2xl md:text-3xl font-bold text-center text-primary">사진첩</h1>
	<div class="mb-2" on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
		<img class="max-w-full max-h-full" src={images[currentIndex]} alt="Image" />
	</div>
	<div class="flex justify-center mt-4">
		{#each images as image, i (image)}
			<img
				class="h-10 mx-2 cursor-pointer"
				src={image}
				alt="Thumbnail"
				on:click={() => (currentIndex = i)}
			/>
		{/each}
	</div>
</div>
