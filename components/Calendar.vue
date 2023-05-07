<template>
	<div class="container p-0">
		<Months />
		<DaysOfWeek />
		<div class="row">
			<WeekOfMonths
				:array-weeks="calendarItems.sunday"
				color-line="text-primary"
				backgroundCard="bg-light"
			/>
			<WeekOfMonths :array-weeks="calendarItems.monday" />
			<WeekOfMonths :array-weeks="calendarItems.tuesday" />
			<WeekOfMonths :array-weeks="calendarItems.wednesday" />
			<WeekOfMonths :array-weeks="calendarItems.thursday" />
			<WeekOfMonths :array-weeks="calendarItems.friday" />
			<WeekOfMonths
				:array-weeks="calendarItems.saturday"
				color-line="text-primary"
				backgroundCard="bg-light"
			/>
		</div>
	</div>
</template>

<script setup>
import { useCalendarStore } from "~/stores/calendarStore";

const store = useCalendarStore();
const calendarItems = useCalendar(store.monthSelected, 2023);
</script>

<style scoped>
.row {
	margin: 0 !important;
}
</style>