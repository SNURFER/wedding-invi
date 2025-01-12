<script lang="ts">
	import { groomFullName, dday, brideFullName, poiSubText, poiName, timeStr } from '../resource/input'

	const imgURL = 'image/kakao_link_image.jpeg';
	const dateText = dday[0] + '년 ' + dday[1] + '월 ' + dday[2] + '일, ' + timeStr;
	export let isTouched: boolean;
</script>

<img src={imgURL} alt="intro" width="678" height="1024" class="w-full pb-5" />
<div class="text-center justify-center modal-middle flex py-5 text-2xl">
	<span class="px-3">{groomFullName}</span>
	<button
		on:click={() => {
			isTouched = !isTouched;
		}}
	>
		<p class="btn rounded-full animate-bounce px-3 text-xl text-primary">❤</p>
	</button>
	<span class="px-3">{brideFullName}</span>
</div>
<div class="text-center py-5 text-2xl">
	<p>{dateText}</p>
	<p>{poiName}</p>
	<p class="text-sm text-gray-500">{poiSubText}</p>
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
