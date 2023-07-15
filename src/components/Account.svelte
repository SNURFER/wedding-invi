<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import copyIcon from 'svelte-awesome/icons/copy';

	const groomBank = '농협';
	const groomAccountNum = '3020930514581';
	const brideBank = '신한';
	const brideAccountNum = '3120035123841';

	const copyAccount = async (accountInfo: string) => {
		await navigator.clipboard.writeText(accountInfo);
		alert('계좌번호가 복사되었습니다.');
	};
	const kakaoPay = async (accountInfo: string) => {
		alert('카카오페이로 이동합니다');
	};
</script>

<div class="py-5 mx-10">
	<h1 class="text-3xl md:text-3xl font-bold text-center text-stone-500">마음 전하실 곳</h1>
	<details class="text-center">
		<summary class="cursor-pointer text-base">신랑측 계좌번호</summary>
		<div class="flex flex-row justify-center items-center">
			<p class="m-1 text-base">이시도</p>
			<p class="text-justify m-1">{groomBank}</p>
			<p class="text-justify m-1">{groomAccountNum}</p>
			<button class="btn" on:click={() => copyAccount(groomAccountNum)}
				>복사<Icon data={copyIcon} /></button
			>
			<button class="btn" on:click={() => kakaoPay(groomAccountNum)}
				>카카오페이<Icon data={copyIcon} /></button
			>
		</div>
	</details>
	<details class="text-center">
		<summary class="cursor-pointer text-base">신부측 계좌번호</summary>
		<div class="flex flex-row justify-center items-center">
			<p class="m-1 text-base">장소영</p>
			<p class="text-justify m-1">{brideBank}</p>
			<p class="text-justify m-1">{brideAccountNum}</p>
			<button class="btn" on:click={() => copyAccount(brideAccountNum)}
				>복사<Icon data={copyIcon} /></button
			>
			<button class="btn" on:click={() => kakaoPay(groomAccountNum)}
				>카카오페이<Icon data={copyIcon} /></button
			>
		</div>
	</details>
</div>
