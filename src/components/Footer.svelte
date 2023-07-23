<script lang="ts">
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import { Icon } from 'svelte-awesome';
</script>

<div class="w-full bg-stone-300 py-2">
	<div class="max-w-xl w-full mx-auto flex space-x-2 text-sm justify-center items-center">
		<span> developed by </span>
		<span class="text-lg font-bold text-gray-800"> LSD </span>
		<a class="text-gray-400" href="https://github.com/SNURFER" target="_blank" rel="noreferrer">
			<Icon class="blackIcon text-black" data={githubSquare} scale={2} />
		</a>
	</div>
</div>
