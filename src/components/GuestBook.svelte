<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	let defaultModal = false;

	let name: string;
	let password: string;
	let message: string;

	function doPost() {
		let result: string = '이름: ' + name + ', 비밀번호: ' + password + ', 메시지: ' + message;
		alert(result);
	}
</script>

<div class="py-5 mx-auto">
	<h1 class="text-3xl md:text-3xl font-bold text-center text-stone-500">방명록</h1>
	<p class="text-gray-500 text-center">응원의 메시지를 남겨주시면 소중히 간직하겠습니다.</p>
	<div class="flex-col justify-end flex items-end">
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 m-10 pb-[5px] pt-[6px] font-medium text-base"
			on:click={() => (defaultModal = true)}>작성하기</button
		>
	</div>
	<Modal class="m-5" title="방명록 글 작성" bind:open={defaultModal} autoclose>
		<div class="px-5 lg:px-8">
			<form class="space-y-2">
				<div>
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>이름</label
					>
					<input type="text" class="w-full input-bordered rounded-lg" required bind:value={name} />
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>비밀번호</label
					>
					<input
						type="password"
						class="w-full input-bordered rounded-lg"
						maxlength="15"
						required
						bind:value={password}
					/>
				</div>
				<div>
					<label for="letter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>내용</label
					>
					<textarea
						class="textarea w-full rounded-lg textarea-bordered h-24 bg-white"
						placeholder="메시지"
						bind:value={message}
					/>
				</div>
			</form>
		</div>
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doPost}>작성하기</button
		>
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base"
			>닫기</button
		>
	</Modal>
</div>
