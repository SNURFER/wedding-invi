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
	import {dday, mainDescription, mainImageURL, mainTitle, siteURL} from '../resource/input';

	let guestMessages: Array<any> = [];
	onMount(async () => {
		const res = await fetch('/api/guestbook');
		guestMessages = (await res.json()).guestbooks.reverse();
		// Perform any initialization or data fetching here
	});
	let isTouched: boolean = false;
	const imageUrl = mainImageURL;
	const siteUrl = siteURL;
	const title = mainTitle;
	const description = mainDescription;
</script>

<svelte:head>
	<title>{title}</title>
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
<Calendar year={dday[0]} month={dday[1]} theDay={dday[2]} />
<div class="divider py-10" />
<Gallery />
<div class="divider py-10" />
<Location />
<div class="divider py-10" />
<GuestBook bind:guestMessages />
<div class="divider" />
<Account />
<Footer />

<AnimationFrame isHeartMode={true} />
