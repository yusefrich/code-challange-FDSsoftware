<script setup>
import { useCalendarStore } from "~/stores/calendarStore";

const store = useCalendarStore();
</script>

<template>
	<Header />
	<Calendar :key="store.monthSelected" />
</template>
