export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    form: {
      day: '',
      hour: '',
      city: '',
      color: '',
      reminder: '',
    },
    forms: [],
    index: null,
    isEdit: false,
    monthSelected: new Date().getMonth() + 1
  }),
  actions: {
    saveForm(form) {
      if (this.isEdit) {
        localStorage.clear()
        this.form = form
        this.forms.splice(this.index, 1, form)
      } else {
        this.form = form
      }
    },
    setFormOnLocalStorage() {
      if (this.isEdit) {
        localStorage.setItem('reminder', JSON.stringify(this.forms))
      } else {
        this.forms.push(this.form)
        localStorage.setItem("reminder", JSON.stringify(this.forms));
      }
    },
    getFormOnLocalStorage() {
      if (typeof localStorage !== "undefined") {
        if (JSON.parse(localStorage.getItem("reminder"))?.length > 0) {
          this.forms = JSON.parse(localStorage.getItem("reminder"));
        }
      }
    },
    removeReminder() {
      localStorage.clear()
      this.forms.splice(this.index, 1)
      localStorage.setItem('reminder', JSON.stringify(this.forms))
    }
  },
})

export default {
  useCalendarStore
}
