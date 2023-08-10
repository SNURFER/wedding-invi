<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	let images: string[] = [
		'image/1.jpeg',
		'image/2.jpeg',
		'image/3.jpeg',
		'image/4.jpeg',
		'image/5.jpeg',
		'image/6.jpeg',
		'image/7.jpeg',
		'image/8.jpeg',
		'image/9.jpeg',
		'image/10.jpeg',
		'image/11.jpeg',
		'image/12.jpeg',
		'image/13.jpeg',
		'image/14.jpeg',
		'image/15.jpeg',
		'image/16.jpeg',
		'image/17.jpeg',
		'image/18.jpeg',
		'image/19.jpeg',
		'image/20.jpeg'
	];
</script>

<div class="mx-auto w-full">
	<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-500">사진첩</h1>
	<div class="mb-2">
		<swiper-container
			thumbs-swiper=".my-thumbs"
			slides-per-view={1}
			navigation={true}
			pagination={true}
			centered-slides={true}
		>
			{#each images as image, i (image)}
				<swiper-slide>
					<img src={image} alt="Thumbnail" />
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
	<swiper-container class="my-thumbs" slides-per-view={5} navigation="true">
		{#each images as image, i (image)}
			<swiper-slide>
				<img class="thumb-img" src={image} alt="Thumbnail" />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	swiper-container::part(bullet-active) {
		background-color: gray;
	}
	swiper-container::part(bullet) {
		background-color: gray;
	}
	swiper-container::part(button-prev) {
		color: gray;
	}
	swiper-container::part(button-next) {
		color: gray;
	}
	.thumb-img {
		object-fit: cover;
		aspect-ratio: 1 / 1.3;
		width: 100%;
	}
</style>
