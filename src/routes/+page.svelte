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
  
<main>
    <Header/>
    <MainImage/>
    <div class="divider"/>
    <MainMessage/>
    <div class="divider"/>
</main>
    <AnimationFrame></AnimationFrame>
  