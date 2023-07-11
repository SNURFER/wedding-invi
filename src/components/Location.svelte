<script lang="ts">
	//티맵 길안내
	function tMap(name: string, lat: number, lng: number) {
		const href =
			'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name=' +
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

<section>
	<div class="py-3 mx-auto">
		<h1 class="mb-8 text-2xl md:text-3xl font-bold text-center text-primary">오시는 길</h1>
		<a href="<FILL_NAVER_MAPS_URL>" target="_blank"
			><img src="/image/map.png" alt="" width="883" height="506" class="w-full" /></a
		>
		<div class="text-center px-5 py-5">
			<a
				id="kakao-navi"
				href={kakaoMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn mx-2"><span class="text-xs">카카오 길안내</span></a
			>
			<a
				id="tmap-navi"
				href={tMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn mx-2"><span class="text-xs">티맵 길안내</span></a
			>
			<a
				id="naver-navi"
				href={naverMap('교수회관', 37.457414, 126.954494)}
				role="button"
				class="btn mx-2"><span class="text-xs">네이버 길안내</span></a
			>
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
