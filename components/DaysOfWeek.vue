<template>
	<div class="d-flex">
		<div class="w-100" v-for="(day, index) in daysOfWeek" :key="index">
			<div class="card rounded-0 bg-primary">
				<span class="d-flex justify-content-center text-white text-truncate">
					{{ day }}</span
				>
			</div>
		</div>
	</div>
</template>

<script setup>
const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
</script>

<style scoped>
.titleSize {
	width: 9rem;

	text-align: center;
}

@media screen and (max-width: 1200px) {
	.titleSize {
		width: 8rem !important;

		text-align: center !important;
	}
}

@media screen and (max-width: 990px) {
	.titleSize {
		width: 6rem !important;

		text-align: center !important;
	}
}

@media screen and (max-width: 768px) {
	.titleSize {
		width: 4rem !important;

		text-align: center !important;
	}
}
</style>
