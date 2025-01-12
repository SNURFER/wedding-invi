<script lang="ts">
	import { onMount } from 'svelte';
	import { monthNames, dayNames } from '../resource/utils';
	import { brideName, groomName, dday } from '../resource/input';

	export let year: number;
	export let month: number;
	export let theDay: number;

	interface DayItem {
		day: Number;
		isCurrentMonth: Boolean;
	}

	let days: DayItem[][] = [];
	let weekDays: string[] = [];

	onMount(() => {
		generateCalendarGrid();
	});

	function getDDay(year: number, month: number, day: number): string {
		const curDate: Date = new Date();
		const tarDate: Date = new Date(year, month - 1, day);
		const gap = tarDate.getTime() - curDate.getTime();
		const dday = Math.ceil(gap / (1000 * 60 * 60 * 24));
		//TODO 숫자에만 하이라이트 빨간색으로
		return groomName + ' ❤ ' + brideName + ' 결혼식이 ' + dday.toString() + ' 일 남았습니다.';
	}

	function generateCalendarGrid() {
		const firstDayOfMonth = new Date(year, month - 1, 1);
		const lastDayOfMonth = new Date(year, month, 0);
		const firstDayIndex = firstDayOfMonth.getDay();
		const lastDay = lastDayOfMonth.getDate();

		let dayCounter = 1;
		days = [];
		weekDays = dayNames;

		let week: Array<DayItem> = [];
		let prevMonthDays = new Date(year, month - 1, 0).getDate();
		for (let i = firstDayIndex - 1; i >= 0; i--) {
			week.push({
				day: prevMonthDays - i,
				isCurrentMonth: false
			});
		}

		while (dayCounter <= lastDay) {
			week.push({
				day: dayCounter,
				isCurrentMonth: true
			});
			if (week.length === 7) {
				days.push(week);
				week = [];
			}
			dayCounter++;
		}

		if (week.length > 0) {
			days.push(week);
		}
	}
</script>

<div class="py-5 flex flex-col w-full px-5 mt-4 text-center">
	<div class="selected-month text-3xl text-stone-600 py-5">
		{#if theDay !== undefined}
			{monthNames[month - 1]}
		{/if}
	</div>

	<div class="grid grid-cols-7 gap-2">
		{#each weekDays as dayName}
			<div class="p-2 text-center bg-gray-200 rounded">{dayName}</div>
		{/each}

		{#each days as week}
			{#each week as { day, isCurrentMonth }}
				{#if day !== null}
					{#if day === theDay}
						<div class="p-2 text-center bg-pink-300 rounded-full">
							<span>{day}</span>
						</div>
					{:else}
						<div class="p-2 text-center">
							{#if !isCurrentMonth}
								<span class="text-gray-400">{day}</span>
							{:else}
								<span>{day}</span>
							{/if}
						</div>
					{/if}
				{/if}
			{/each}
		{/each}
	</div>
	<div>
		<p class="leading-relaxed mt-1" />
	</div>
	<div class="card p-4 my-2 bg-gray-100 shadow-xl">
		<h2 class="text-xl font-bold title-font">{getDDay(dday[0], dday[1], dday[2])}</h2>
	</div>
</div>
