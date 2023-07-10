<script lang="ts">
	import { onMount } from 'svelte';
	import { monthNames, dayNames } from '../utils/utils';

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
		return '시도 ♥ 소영 결혼식이 ' + dday.toString() + ' 일 남았습니다.';
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

<div class="py-10 flex flex-col w-full px-5 mt-4">
	<div class="selected-month text-lg">
		{#if theDay !== undefined}
			{monthNames[month - 1]}
		{/if}
	</div>

	<div class="calendar">
		{#each weekDays as dayName}
			<div class="day">{dayName}</div>
		{/each}

		{#each days as week}
			{#each week as { day, isCurrentMonth }}
				<div
					class:day={theDay === day}
					class:selected={theDay === day}
					class:is-other-month={isCurrentMonth === false}
				>
					{#if day !== null}
						<span class:selected={theDay === day}>
							{day}
						</span>
					{/if}
				</div>
			{/each}
		{/each}
	</div>
	<div>
		<p class="leading-relaxed mt-1" />
	</div>
	<div class="card p-4 my-2 bg-base-100 shadow-xl">
		<h2 class="text-lg font-bold title-font">{getDDay(2023, 10, 21)}</h2>
	</div>
</div>

<style>
	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.5rem;
	}

	.day {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		text-align: center;
		background-color: #f0f0f0;
		border-radius: 4px;
	}

	.selected {
		background-color: #a9a9a9;
		color: white;
		font-weight: bold;
	}

	.selected-month {
		text-align: center;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.day.is-other-month {
		color: #888888;
	}
</style>
