<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
	import MainImage from '../components/MainImage.svelte';
	import MainMessage from '../components/MainMessage.svelte';
	import AnimationFrame from '../components/AnimationFrame.svelte';
  
    onMount(() => {
      // Perform any initialization or data fetching here
    });
  

</script>
  
    <Header/>
    <MainImage/>
    <div class="divider py-10"/>
    <MainMessage/>
    <div class="divider"/>
    <AnimationFrame></AnimationFrame>
  