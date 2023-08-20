<script lang="ts">
	import { onMount } from 'svelte';
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import { Icon } from 'svelte-awesome';
	import { env } from '$env/dynamic/public';
	import copy from 'copy-to-clipboard';

	// share main image
	const imageUrl = 'https://wedding-invi-one.vercel.app/image/kakao_link_image.jpeg';
	const title = '이시도 🩷 장소영의 결혼식에 초대합니다.';
	const description = '2023년 10월 21일 토요일 11시 \n서울대학교 교수회관';

	onMount(() => {
		Kakao.init(env.PUBLIC_KAKAO_JS_KEY);
		Kakao.Share.createDefaultButton({
			container: '#kakao-share',
			objectType: 'feed',
			content: {
				title,
				description,
				imageUrl,
				link: {
					mobileWebUrl: window.location.href,
					webUrl: window.location.href
				}
			},
			buttons: [
				{
					title: '청첩장 보러가기',
					link: {
						mobileWebUrl: window.location.href,
						webUrl: window.location.href
					}
				}
			]
		});
	});

	async function sharePage() {
		if (navigator.share) {
			navigator.share({
				title: document.title,
				url: window.location.href
			});
		} else {
			copy(window.location.href);
			alert('링크가 복사되었습니다.');
		}
	}
</script>

<svelte:head>
	<script
		src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
		integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
		crossorigin="anonymous"
	>
	</script>
</svelte:head>

<section>
	<div class="text-center px-5 py-5">
		<a
			id="kakao-share"
			href="javascript:;"
			role="button"
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[11px] font-medium text-base"
			>카카오톡으로 공유</a
		>
		<button
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
			on:click={sharePage}>링크로 공유</button
		>
	</div>
</section>

<div class="w-full bg-stone-300 py-2">
	<div class="max-w-xl w-full mx-auto flex space-x-2 text-sm justify-center items-center">
		<span> developed by </span>
		<span class="text-lg font-bold text-gray-800"> LSD </span>
		<a class="text-gray-400" href="https://github.com/SNURFER" target="_blank" rel="noreferrer">
			<Icon class="blackIcon text-black" data={githubSquare} scale={2} />
		</a>
	</div>
</div>
