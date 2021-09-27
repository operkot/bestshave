export default () => ({
  isOpen: false,

  open() {
    this.isOpen = true
  },

  close() {
    this.isOpen = false
  },

  toggle() {
    this.isOpen = !this.isOpen
  },

  focusInput() {
    this.$refs.input.focus()
  },
})
