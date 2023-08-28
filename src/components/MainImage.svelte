<script lang="ts">
	const imgURL = 'image/kakao_link_image.jpeg';
	export let isTouched: boolean;
</script>

<img src={imgURL} alt="intro" width="678" height="1024" class="w-full pb-5" />
<div class="text-center justify-center modal-middle flex py-5 text-2xl">
	<span class="px-3">이시도</span>
	<button
		on:click={() => {
			isTouched = !isTouched;
		}}
	>
		<p class="btn rounded-full animate-bounce px-3 text-xl text-primary">❤</p>
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
