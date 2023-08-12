<script lang="ts">
	import AccountItem from './AccountItem.svelte';

	const groomName = '이시도';
	const groomBank = '농협';
	const groomAccountNum = '302-0930-5145-81';
	const groomKakaoURL = 'https://qr.kakaopay.com/Ej8iC3z3c';
	const groomMotherName = '이명순';
	const groomMotherBank = '국민';
	const groomMotherAccountNum = '818-24-0059-439';

	const brideName = '장소영';
	const brideBank = '국민';
	const brideAccountNum = '079-80204-183334';
	const brideKakaoURL = 'https://qr.kakaopay.com/Ej8EyRNMa';
</script>

<div class="py-5 mb-20">
	<h1 class="text-3xl md:text-3xl m-5 font-bold text-center text-stone-500">마음 전하실 곳</h1>
	<details class="text-center m-2">
		<summary class="cursor-pointer text-lg">신랑측 계좌번호</summary>
		<AccountItem
			name={groomName}
			bank={groomBank}
			accountNum={groomAccountNum}
			kakaoURL={groomKakaoURL}
		/>
		<AccountItem name={groomMotherName} bank={groomMotherBank} accountNum={groomMotherAccountNum} />
	</details>
	<details class="text-center m-2">
		<summary class="cursor-pointer text-lg">신부측 계좌번호</summary>
		<AccountItem
			name={brideName}
			bank={brideBank}
			accountNum={brideAccountNum}
			kakaoURL={brideKakaoURL}
		/>
	</details>
</div>
