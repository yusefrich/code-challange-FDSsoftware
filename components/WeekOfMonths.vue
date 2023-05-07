<template>
	<div class="col">
		<div
			v-for="(day, index) in arrayWeeks"
			:key="index"
			class="size card rounded-0 w-100 h-50 overflow-auto"
		>
			<div class="card-body p-0" :class="backgroundCard">
				<div
					class="row card-title p-1 m-0 justify-content-between align-items-center"
					:class="colorLine"
				>
					{{ day.day }}
					<button
						class="register-button col-1 p-0 btn btn-outline-primary rounded-circle"
						@click="createReminder(day.fullDate)"
					>
						<span class="d-flex justify-content-center">+</span>
					</button>
				</div>
				<template
					v-for="(item, index) in sortReminders"
					:key="`${item.day}${index}`"
				>
					<div v-if="day.fullDate === item.day">
						<div
							class="card rounded h-100 edit-card mx-auto"
							@click="handleEditReminder(item, index)"
						>
							<div class="card-text p-1 text-white" :class="item.color">
								<p class="m-0">{{ item?.hour }}</p>
								<p class="m-0">{{ item?.city }}</p>
								<p class="m-0 text-break">{{ item?.reminder }}</p>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
	<CreateReminderModal
		v-if="showModal"
		@close="showModal = $event"
		:current-day="currentDay"
	/>
</template>

<script setup>
import { useCalendarStore } from "~/stores/calendarStore";

const props = defineProps({
	arrayWeeks: {
		type: Array,
		default: () => {},
	},
	colorLine: String,
	backgroundCard: String,
});

const showModal = ref(false);

const currentDay = ref();
const reminders = ref([]);
const store = useCalendarStore();

watch([() => props.arrayWeeks, () => store.forms], ([arrayWeeks, forms]) => {
	if (arrayWeeks && forms) {
		reminders.value = forms;
	}
});

const sortReminders = computed(() => {
	if (reminders.value.length > 0) {
		return reminders.value.sort(function (a, b) {
			let hourA = a.hour.split(":");
			let hourB = b.hour.split(":");
			if (hourA[0] < hourB[0]) {
				return -1;
			} else if (hourA[0] > hourB[0]) {
				return 1;
			} else {
				if (hourA[1] < hourB[1]) {
					return -1;
				} else if (hourA[1] > hourB[1]) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	}
});

store.getFormOnLocalStorage();

const createReminder = (fullDate) => {
	store.$patch((state) => {
		state.isEdit = false;
		state.form = {};
	});
	currentDay.value = fullDate;
	showModal.value = true;
};

const handleEditReminder = (reminder, index) => {
	showModal.value = true;
	currentDay.value = reminder.day;
	store.$patch((state) => {
		state.isEdit = true;
		state.form = reminder;
		state.index = index;
	});
};
</script>

<style scoped>
.size {
	height: 25%;
}
.col {
	padding: 0 !important;
}

.edit-card {
	max-width: 150px;
}

.edit-card:hover {
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.5);
}

.register-button {
	height: 30px;
	width: 30px;
}
</style>