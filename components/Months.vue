<template>
	<div class="btn-group mb-2 d-flex justify-content-around" role="group">
		<div
			v-for="(month, index) in months"
			:key="index"
		>
			<input
				type="radio"
				class="btn-check"
				:name="month.month"
				:id="`${month.month}${index}`"
				autocomplete="off"
				:checked="store.monthSelected === month.value"
				@click="changeMonth(month.value)"
			/>
			<label class="btn btn-outline-primary py-0" :for="`${month.month}${index}`">{{
				month.month
			}}</label>
		</div>
	</div>
</template>

<script setup>
import { useCalendarStore } from "~/stores/calendarStore";

const store = useCalendarStore();

const changeMonth = (month) => {
	store.$patch((state) => {
		state.monthSelected = month;
	});
};

const months = [
	{ value: 1, month: "Janeiro" },
	{ value: 2, month: "Fevereiro" },
	{ value: 3, month: "Março" },
	{ value: 4, month: "Abril" },
	{ value: 5, month: "Maio" },
	{ value: 6, month: "Junho" },
	{ value: 7, month: "Julho" },
	{ value: 8, month: "Agosto" },
	{ value: 9, month: "Setembro" },
	{ value: 10, month: "Outubro" },
	{ value: 11, month: "Novembro" },
	{ value: 12, month: "Dezembro" },
];
</script>
