<script lang="ts">
	import AccountItem from './AccountItem.svelte';
	import { AccountInfo } from '../resource/input';

	const groomName = AccountInfo.groomName;
	const groomBank = AccountInfo.groomBank 
	const groomAccountNum = AccountInfo.groomAccountNum;
	const groomKakaoURL = AccountInfo.groomKakaoURL;

	const groomFatherName = AccountInfo.groomFatherName;
	const groomFatherBank = AccountInfo.groomFatherBank;
	const groomFatherAccountNum = AccountInfo.groomFatherAccountNum;
	const groomFatherKakaoURL = AccountInfo.groomFatherKakaoURL;

	const groomMotherName = AccountInfo.groomMotherName;
	const groomMotherBank = AccountInfo.groomMotherBank;
	const groomMotherAccountNum = AccountInfo.groomMotherAccountNum;
	const groomMotherKakaoURL = AccountInfo.groomMotherKakaoURL;

	const brideName = AccountInfo.brideName;
	const brideBank = AccountInfo.brideBank;
	const brideAccountNum = AccountInfo.brideAccountNum;
	const brideKakaoURL = AccountInfo.brideKakaoURL;

	const brideMotherName = AccountInfo.brideMotherName;
	const brideMotherBank = AccountInfo.brideMotherBank;
	const brideMotherAccountNum = AccountInfo.brideMotherAccountNum;
	const brideMotherKakaoURL = AccountInfo.brideMotherKakaoURL;

	const brideFatherName = AccountInfo.brideFatherName;
	const brideFatherBank = AccountInfo.brideFatherBank;
	const brideFatherAccountNum = AccountInfo.brideFatherAccountNum;
	const brideFatherKakaoURL = AccountInfo.brideFatherKakaoURL;
</script>

<div class="py-5 mb-20">
	<h1 class="text-3xl md:text-3xl m-5 font-bold text-center text-stone-600">마음 전하실 곳</h1>
	<details class="text-center m-2">
		<summary class="cursor-pointer text-lg">신랑측 계좌번호</summary>
		<AccountItem
			name={groomName}
			bank={groomBank}
			accountNum={groomAccountNum}
			kakaoURL={groomKakaoURL}
		/>
		<AccountItem 
			name={groomFatherName} 
			bank={groomFatherBank} 
			accountNum={groomFatherAccountNum} 
			kakaoURL={groomFatherKakaoURL} 
		/>
		<AccountItem
			name={groomMotherName}
			bank={groomMotherBank}
			accountNum={groomMotherAccountNum}
			kakaoURL={groomMotherKakaoURL}
		/>
	</details>
	<details class="text-center m-2">
		<summary class="cursor-pointer text-lg">신부측 계좌번호</summary>
		<AccountItem
			name={brideName}
			bank={brideBank}
			accountNum={brideAccountNum}
			kakaoURL={brideKakaoURL}
		/>
		<AccountItem 
			name={brideFatherName} 
			bank={brideFatherBank} 
			accountNum={brideFatherAccountNum} 
			kakaoURL={brideFatherKakaoURL} 
		/>
		<AccountItem 
			name={brideMotherName} 
			bank={brideMotherBank} 
			accountNum={brideMotherAccountNum} 
			kakaoURL={brideMotherKakaoURL}
		/>
	</details>
</div>
