<script lang="ts">
	import { Modal } from 'flowbite-svelte';

	export let guestMessages: Array<any>;
	let defaultModal = false;

	let name: string;
	let password: string;
	let message: string;

	async function doPost() {
		let result: string = '이름: ' + name + ', 비밀번호: ' + password + ', 메시지: ' + message;
		alert(result);
		const res = await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				password,
				message
			})
		});

		const { insertedId, date } = await res.json();
		console.log(insertedId, date);

		guestMessages = [
			{
				_id: insertedId,
				name: name,
				password: password,
				message: message,
				date: date
			},
			...guestMessages
		];
		name = '';
		password = '';
		message = '';
	}
</script>

<div class="py-5 mx-auto">
	<h1 class="text-3xl md:text-3xl font-bold text-center text-stone-500">방명록</h1>
	<p class="text-gray-500 text-center">응원의 메시지를 남겨주시면 소중히 간직하겠습니다.</p>
	<div class="space-y-4">
		<div class="overflow-x-auto flex w-full space-x-3 h-64 py-4 relative">
			{#if guestMessages.length !== 0}
				{#each guestMessages as messageCard}
					<div
						class="flex flex-col w-44 max-x-xl flex-none p-4 justify-between bg-stone-100 rounded-xl shadow-md"
					>
						<div class="overflow-hidden flex-col break-all text-ellipsis leading-5">
							{messageCard.message}
						</div>
						<div class="text-right">
							<h1>{messageCard.name}</h1>
							<span>{messageCard.date.slice(0, -5)}</span>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="flex-row justify-end flex items-end">
		<button
			disabled
			class="disabled:opacity-50 inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
			on:click={() => {}}>전체보기</button
		>
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
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
