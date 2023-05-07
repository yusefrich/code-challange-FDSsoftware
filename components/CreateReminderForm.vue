<template>
	<form @submit.prevent="submitForm">
		<fieldset>
			<legend>Lembrete</legend>
			<div class="row mb-3">
				<div class="col-6">
					<label class="form-label">Dia</label>
					<input
						v-model="day"
						type="date"
						class="form-control"
						placeholder="Dia do mês"
						disabled
					/>
				</div>

				<div class="col-6">
					<label class="form-label">Hora</label>
					<input
						v-model="hour"
						type="time"
						class="form-control"
						placeholder="Hora"
						required
					/>
				</div>
			</div>

			<div class="row mb-3">
				<div class="col-6">
					<label class="form-label">Cidade</label>
					<input
						v-model="city"
						type="text"
						class="form-control"
						placeholder="Nome da cidade"
					/>
				</div>

				<div class="col-6">
					<label class="form-label">Cor</label>
					<select class="form-select" v-model="color" required>
						<option selected disabled>Seleciona a cor desejada</option>
						<option value="bg-danger bg-gradient">Vermelho</option>
						<option value="bg-primary bg-gradient">Azul</option>
						<option value="bg-success bg-gradient">Verde</option>
					</select>
				</div>
			</div>

			<div class="row mb-3 form-floating">
				<div class="col">
					<label class="form-label">Lembrete</label>
					<textarea
						v-model="reminder"
						class="form-control"
						placeholder="Insira Aqui o Lembrete"
						style="height: 100px"
						maxlength="30"
						required
					></textarea>
					<small class="form-text text-muted text-end">
						Caracteres {{ reminder?.length }}/30
					</small>
				</div>
			</div>
			<div class="d-flex justify-content-end">
				<button
					v-show="showDeleteButton"
					type="button"
					class="btn btn-danger text-white"
					@click="handleDeleteReminder"
				>
					Excluir
				</button>
				<button type="submit" class="mx-2 btn btn-primary text-white">
					Salvar
				</button>
				<button
					type="button"
					class="btn btn-secondary text-white"
					@click="handleClose"
				>
					Fechar
				</button>
			</div>
		</fieldset>
	</form>
</template>

<script setup>
import { useCalendarStore } from "~/stores/calendarStore";

const emit = defineEmits(["showModal"]);

const props = defineProps({
	currentDay: String,
});

const store = useCalendarStore();

const day = ref(props.currentDay);
const hour = ref(store.form.hour);
const city = ref(store.form.city);
const color = ref(store.form.color);
const reminder = ref(store.form.reminder);
const showDeleteButton = ref(store.isEdit);

const form = computed(() => ({
	day: day.value,
	hour: hour.value,
	city: city.value,
	color: color.value,
	reminder: reminder.value,
}));

const submitForm = () => {
	store.saveForm(form.value);
	store.setFormOnLocalStorage();
	store.getFormOnLocalStorage();
	emit("showModal", false);
};

const handleClose = () => {
	store.$patch((state) => {
		state.index = null;
		state.isEdit = false;
	});
	emit("showModal", false);
};

const handleDeleteReminder = () => {
	if (!confirm("Deseja realmente excluir?")) {
		return;
	}
	emit("showModal", false);
	store.removeReminder();
};
</script>
