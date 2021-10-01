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
})
