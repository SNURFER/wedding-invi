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
		src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId={env.PUBLIC_NAVER_API_KEY}"
	></script>
</svelte:head>

<section>
	<div class="py-5 mx-auto">
		<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">오시는 길</h1>
		<div class="text-center py-2 text-xl">
			<p>서울대학교 교수회관</p>
			<p class="text-gray-500 text-base">서울 관악구 관악로 1 65동</p>
		</div>

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
				<h2 class="text-xl font-bold title-font">자가용</h2>
				<p class="leading-relaxed mt-1 text-base">
					- 서울대입구역, 낙성대역에서 택시로 5~10분 소요 <br />
					- 내비게이션 : '서울대학교 교수회관' 또는 서울대학교 학군단' <br />
					1. 서울대 후문으로 진입 시, 기숙사 삼거리에서 좌회전 후 400m 올라오십시오. <br />
					2. 서울대 정문으로 진입 시, 기숙사 삼거리에서 오른쪽으로 400m 올라오십시오. <br />
					// 낙성대 근처의 "호암교수회관" 아닙니다.
				</p>
			</div>
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-xl font-bold title-font">대중교통(환승, 하차 시 약도 참조)</h2>
				<p class="leading-relaxed mt-1 text-base">
					- 2호선 낙성대역(4번출구) ➡ GS 주유소끼고 좌회전 ➡ 제과점(장블랑제리) 앞에서 마을버스 2번
					➡ '노천강당' 또는 '기초과학공동기기원, 교수회관' 정류장에서 하차 - 2호선 <br />
					- 서울대입구역(3번출구) ➡ 5511버스 ➡ '기초과학공동기기원, 교수회관' 정류장에서 하차 <br />
					- 신림선 관악산역(1번출구) ➡ 5516버스 ➡ '기초과학공동기기원' 정류장에서 하차 <br />
					- 관악선역(1번출구) ➡ 5516버스 ➡ '기초과학공동기기원' 정류장에서 하차 <br />
				</p>
			</div>
			<img src="image/map.png" class="mx-auto" alt="" />
		</div>
	</div>
</section>
