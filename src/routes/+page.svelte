<script>
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import MainImage from '../components/MainImage.svelte';
	import MainMessage from '../components/MainMessage.svelte';
	import AnimationFrame from '../components/AnimationFrame.svelte';
	import Calendar from '../components/Calendar.svelte';

	onMount(() => {
		// Perform any initialization or data fetching here
	});
</script>

<Header />
<MainImage />
<div class="divider py-10" />
<MainMessage />
<div class="divider" />
<Calendar year={2023} month={9} theDay={21} />
<AnimationFrame />
