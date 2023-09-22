<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import MainImage from '../components/MainImage.svelte';
	import MainMessage from '../components/MainMessage.svelte';
	import AnimationFrame from '../components/AnimationFrame.svelte';
	import Calendar from '../components/Calendar.svelte';
	import Location from '../components/Location.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Footer from '../components/Footer.svelte';
	import GuestBook from '../components/GuestBook.svelte';
	import Account from '../components/Account.svelte';

	let guestMessages: Array<any> = [];
	onMount(async () => {
		const res = await fetch('/api/guestbook');
		guestMessages = (await res.json()).guestbooks.reverse();
		// Perform any initialization or data fetching here
	});
	let isTouched: boolean = false;
	const imageUrl = 'https://wedding-invi-one.vercel.app/image/kakao_link_image.jpeg';
	const siteUrl = 'https://wedding-invi-one.vercel.app';
	const title = '이시도 ❤ 장소영의 결혼식에 초대합니다.';
	const description = '2023년 10월 21일 토요일 11시 \n서울대학교 교수회관';
</script>

<svelte:head>
	<title>이시도 ❤️ 장소영의 결혼식에 초대합니다.</title>
	<meta property="og:title" content={title} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={imageUrl} />
</svelte:head>

<Header />
<MainImage bind:isTouched />
<div class="divider py-10" />
<MainMessage />
<Calendar year={2023} month={10} theDay={21} />
<div class="divider py-10" />
<Gallery />
<div class="divider py-10" />
<Location />
<div class="divider py-10" />
<GuestBook bind:guestMessages />
<div class="divider" />
<Account />
<Footer />

{#if !isTouched}
	<AnimationFrame isHeartMode={true} />
{:else}
	<AnimationFrame isHeartMode={false} />
{/if}
