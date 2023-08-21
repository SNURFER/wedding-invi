<script lang="ts">
	import { register } from 'swiper/element/bundle';
	register();

	let isSwipingMode = false;

	const onProgress = (e: any) => {
		const [swiper, progress] = e.detail;

		if (progress !== 0) {
			isSwipingMode = true;
		} else {
			isSwipingMode = false;
		}
	};

	const onSlideAnimationEnded = (e: any) => {
		isSwipingMode = false;
	};

	const preventTouch = (e: any) => {
		if (isSwipingMode) {
			e.preventDefault();
			e.returnValue = false;
			return false;
		}
	};

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
		'image/20.jpeg',
		'image/21.jpeg',
		'image/22.jpeg',
		'image/23.jpeg',
		'image/24.jpeg',
		'image/25.jpeg'
	];
</script>

<div class="mx-auto w-full">
	<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">사진첩</h1>
	<div class="mb-2">
		<swiper-container
			thumbs-swiper=".my-thumbs"
			slides-per-view={1}
			navigation={true}
			pagination={true}
			setWrapperSize={true}
			a11y={true}
			on:progress={onProgress}
			on:slidechange={onSlideAnimationEnded}
			on:touchmove={preventTouch}
			on:slideresettransitionend={onSlideAnimationEnded}
			class="main-slider"
		>
			{#each images as image, i (image)}
				<swiper-slide class="flex justify-center items-center">
					<div class="image-container">
						<img src={image} alt="Thumbnail" />
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
	<swiper-container
		a11y={true}
		space-between={10}
		class="my-thumbs"
		slides-per-view={5}
		on:progress={onProgress}
		on:slidechange={onSlideAnimationEnded}
		on:touchmove={preventTouch}
		on:slideresettransitionend={onSlideAnimationEnded}
	>
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
		width: 5px;
		height: 5px;
	}
	swiper-container::part(bullet) {
		background-color: gray;
		width: 5px;
		height: 5px;
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
	/* Center the slides within the main swiper-container */
	.main-slider {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 700px; /* Set your desired fixed height */
	}

	/* Style for the main images */
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.image-container img {
		max-height: 100%;
		max-width: 100%;
		object-fit: contain; /* Adjust the object-fit value as needed */
	}
</style>
