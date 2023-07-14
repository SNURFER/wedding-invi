<script>
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import MainImage from '../components/MainImage.svelte';
	import MainMessage from '../components/MainMessage.svelte';
	import AnimationFrame from '../components/AnimationFrame.svelte';
	import Calendar from '../components/Calendar.svelte';
	import Location from '../components/Location.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Footer from '../components/Footer.svelte';

	onMount(() => {
		// Perform any initialization or data fetching here
	});
</script>

<svelte:head>
	<title>이시도 🩷 장소영의 결혼식에 초대합니다.</title>
</svelte:head>

<Header />
<MainImage />
<div class="divider py-10" />
<MainMessage />
<div class="divider py-10" />
<Calendar year={2023} month={10} theDay={21} />
<Gallery />
<div class="divider py-10" />
<Location />
<Footer />

<AnimationFrame />
