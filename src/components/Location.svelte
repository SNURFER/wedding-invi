<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	onMount(() => {
		let mapOption = new naver.maps.Map('naverMap', {
			center: new naver.maps.LatLng(37.45781, 126.954047), // 안내와 다르게 건물 근접 위,경도로 지정
			zoom: 17
		});

		let marker = new naver.maps.Marker({
			position: new naver.maps.LatLng(37.45781, 126.954047),
			map: mapOption
		});
	});

	//티맵 길안내
	function tMap(name: string, lat: number, lng: number) {
		const href =
			'https://apis.openapi.sk.com/tmap/app/routes?appKey=' +
			String(env.PUBLIC_TMAP_API_KEY) +
			'&name=' +
			name +
			'&lon=' +
			lng +
			'&lat=' +
			lat;
		return href;
	}

	//카카오맵 길안내
	function kakaoMap(name: string, lat: number, lng: number) {
		const href = 'https://map.kakao.com/link/to/' + name + ',' + lat + ',' + lng;
		return href;
	}

	//네이버맵 길안내
	function naverMap(name: string, lat: number, lng: number) {
		const href =
			'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=' +
			lat +
			'&elng=' +
			lng +
			'&etitle=' +
			name;
		return href;
	}
</script>

<svelte:head>
	<script
		defer
		async
		src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId={env.PUBLIC_NAVER_API_KEY}"
	></script>
</svelte:head>

<section>
	<div class="py-10 mx-auto">
		<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-500">오시는 길</h1>
		<div id="naverMap" class="w-full h-60" />
		<div class="text-center px-1 py-5">
			<a
				id="kakao-navi"
				href={kakaoMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn rounded-lg mx-2"
			>
				<img src="image/kakao.png" height="10" width="10" alt="" />
				<span class="text-sm">카카오 지도</span>
			</a>
			<a
				id="tmap-navi"
				href={tMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn mx-2 rounded-lg"
			>
				<img src="image/tmap.png" height="10" width="10" alt="" />
				<span class="text-sm">티맵 내비</span>
			</a>
			<a
				id="naver-navi"
				href={naverMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn mx-2 rounded-lg"
			>
				<img src="image/naver.png" height="10" width="10" alt="" />
				<span class="text-sm">네이버 지도</span>
			</a>
		</div>
		<div class="flex flex-col w-full px-5 mt-4">
			<div>
				<p class="leading-relaxed mt-1" />
			</div>
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-lg font-bold title-font">자가용</h2>
				<p class="leading-relaxed mt-1 text-sm">자가용 설명이 들어갈 자리</p>
			</div>
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-lg font-bold title-font">지하철</h2>
				<p class="leading-relaxed mt-1 text-sm">지하철 설명이 들어갈 자리</p>
			</div>
			<div class="card p-4 mt-2 bg-base-100 shadow-xl">
				<h2 class="text-lg font-bold title-font">버스</h2>
				<p class="leading-relaxed mt-1 text-sm">버스 설명이 들어갈 자리</p>
			</div>
		</div>
	</div>
</section>
