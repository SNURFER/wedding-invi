<script lang="ts">
	const imgURL = 'image/main_image.jpeg';
	export let isTouched: boolean;
</script>

<img src={imgURL} alt="intro" width="678" height="1024" class="w-full pb-5" />
<div class="text-center justify-center modal-middle flex py-5 text-2xl">
	<span class="px-3">이시도</span>
	<button
		on:click={() => {
			// alert('since 2017/02/25, 하트수를 count 하자. 진입했을 때마다 딱 한번 밖에 못하게');
			isTouched = !isTouched;
		}}
	>
		<p class="btn animate-bounce px-3 text-xl text-primary">🩷</p>
	</button>
	<span class="px-3">장소영</span>
</div>
<div class="text-center py-5 text-2xl">
	<p>2023년 10월 21일 (토), 오전 11시</p>
	<p>서울대학교 교수회관</p>
	<p class="text-sm text-gray-500">(호암 교수회관 아닙니다.)</p>
</div>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	.animate-bounce {
		animation: bounce 0.6s infinite;
	}
</style>
