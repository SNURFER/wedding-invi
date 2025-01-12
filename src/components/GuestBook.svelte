<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { Icon } from 'svelte-awesome';
	import edit from 'svelte-awesome/icons/edit';
	import trashO from 'svelte-awesome/icons/trashO';
	import folderOpen from 'svelte-awesome/icons/folderOpen';
	import GuestBookDialog from './GuestBookDialog.svelte';
	import { DialogMode } from '../resource/utils';

	export let guestMessages: Array<any>;
	let createModal = false;
	let editModal = false;
	let deleteModal = false;
	let overviewModal = false;

	let messageID: string;
	let name: string;
	let password: string;
	let message: string;
</script>

<div class="py-5 mx-auto">
	<h1 class="text-3xl md:text-3xl font-bold text-center text-stone-600">방명록</h1>
	<p class="text-gray-500 text-center">응원의 메시지를 남겨주시면 소중히 간직하겠습니다.</p>
	<div class="space-y-4">
		<div class="overflow-x-auto flex w-full space-x-3 h-64 py-4 relative">
			{#each guestMessages as messageCard, id}
				{#if id < 20}
					<div
						class="flex flex-col w-44 max-w-xl flex-none p-4 justify-between bg-stone-100 rounded-xl shadow-md"
					>
						<div class="overflow-hidden flex-col break-all text-ellipsis leading-5">
							{messageCard.message}
						</div>
						<div class="text-right">
							<h1>{messageCard.name}</h1>
							<span>{messageCard.date}</span>
						</div>
					</div>
				{/if}
			{/each}
			<div class="flex flex-col rounded-xl w-44 max-w-xl flex-none p-4 justify-center items-center">
				<button
					on:click={() => (overviewModal = true)}
					class="flex flex-col justify-center items-center space-y-2"
				>
					<Icon data={folderOpen} scale={2} />
					<span>전체보기</span>
				</button>
			</div>
		</div>
	</div>
	<div class="flex-row justify-end flex items-end">
		<button
			disabled={guestMessages.length === 0}
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
			on:click={() => (overviewModal = true)}>전체보기</button
		>
		<button
			disabled
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
			on:click={() => {
				createModal = true;
				name = '';
				message = '';
			}}>작성하기</button
		>
	</div>
	<Modal title="모든 게시글" bind:open={overviewModal} autoclose>
		<div class="flex flex-col overflow-y-auto divied-y space-y-8 scroll px-2">
			{#each guestMessages as messageCard}
				<div class="text-left text-sm break-all leading-5">
					<div class="flex flex-row justify-between items-center mt-8">
						<h1 class="text-base">{messageCard.name}</h1>
						<div class="space-x-2">
							<button
								disabled
								class="disabled:opacity-50"
								on:click={() => {
									messageID = messageCard._id;
									name = messageCard.name;
									password = '';
									message = messageCard.message;
									editModal = true;
								}}
							>
								<Icon data={edit} />
							</button>
							<button
								disabled
								class="disabled:opacity-50"
								on:click={() => {
									messageID = messageCard._id;
									name = messageCard.name;
									password = '';
									message = messageCard.message;
									deleteModal = true;
								}}
							>
								<Icon data={trashO} />
							</button>
						</div>
					</div>
					<div class="mt-2">
						{messageCard.message}
					</div>
					<div class="text-right">
						<span class="text-sm mt-8">
							{messageCard.date}
						</span>
					</div>
				</div>

				<div class="divider" />
			{/each}
		</div>
		<div class="flex flex-row justify-center mt-4">
			<button
				class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base"
				>닫기</button
			>
		</div>
	</Modal>
	<GuestBookDialog
		dialogMode={DialogMode.CREATE}
		bind:modalStatus={createModal}
		bind:name
		bind:password
		bind:message
		bind:guestMessages
	/>
	<GuestBookDialog
		dialogMode={DialogMode.EDIT}
		bind:modalStatus={editModal}
		bind:_id={messageID}
		bind:name
		bind:password
		bind:message
		bind:guestMessages
	/>
	<GuestBookDialog
		dialogMode={DialogMode.DELETE}
		bind:modalStatus={deleteModal}
		bind:_id={messageID}
		bind:name
		bind:password
		bind:message
		bind:guestMessages
	/>
</div>
