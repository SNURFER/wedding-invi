<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { DialogMode } from '../utils/utils';

	export let modalStatus: boolean;
	export let name: string = '';
	export let password: string = '';
	export let message: string = '';
	export let dialogMode: DialogMode = DialogMode.CREATE;
	export let _id: string = '';
	export let guestMessages: Array<any>;

	async function doEdit() {
		const res = await fetch('/api/guestbook', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id,
				message
			})
		});

		guestMessages.forEach((guestMessage) => {
			if (guestMessage._id === _id) {
				guestMessage.message = message;
			}
		});
		guestMessages = [...guestMessages];
	}

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

	async function doDelete() {
		const res = await fetch('/api/guestbook', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				_id
			})
		});

		let removeId: number = 0;

		guestMessages.forEach((message, index) => {
			if (message._id === _id) {
				removeId = index;
			}
		});
		guestMessages.splice(removeId, 1);
		guestMessages = [...guestMessages];
	}
</script>

<Modal class="m-5" title="방명록 글 작성" bind:open={modalStatus} autoclose>
	<div class="px-5 lg:px-8">
		<form class="space-y-2">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>이름</label
				>
				{#if dialogMode !== DialogMode.CREATE}
					<input
						disabled
						type="text"
						class="w-full input-bordered rounded-lg disabled:opacity-50"
						required
						bind:value={name}
					/>
				{:else}
					<input type="text" class="w-full input-bordered rounded-lg" required bind:value={name} />
				{/if}
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
				{#if dialogMode !== DialogMode.DELETE}
					<textarea
						class="textarea w-full rounded-lg textarea-bordered h-24 bg-white"
						placeholder="메시지"
						bind:value={message}
					/>
				{:else}
					<textarea
						disabled
						class="textarea w-full rounded-lg textarea-bordered h-24 bg-white disabled:opacity-50"
						placeholder="메시지"
						bind:value={message}
					/>
				{/if}
			</div>
		</form>
	</div>
	{#if dialogMode === DialogMode.CREATE}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doPost}>작성하기</button
		>
	{:else if dialogMode === DialogMode.EDIT}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doEdit}>수정하기</button
		>
	{:else}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doDelete}>삭제하기</button
		>
	{/if}
	<button
		class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base"
		>닫기</button
	>
</Modal>
