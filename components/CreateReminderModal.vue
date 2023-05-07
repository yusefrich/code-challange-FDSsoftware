<template>
	<div class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<CreateReminderForm
				@show-modal="closeModal($event)"
				:current-day="currentDay"
			/>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
	currentDay: String
})

const closeModal = (event) => {
	emit("close", event);
};
</script>


<style scoped>
.modal {
	z-index: 1;
	display: block;
	position: fixed;

	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
	background-color: white;
	margin: 50px auto 350px auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
}
</style>