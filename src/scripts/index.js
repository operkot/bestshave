import Alpine from 'alpinejs'

import menu from './components/menu'
import search from './components/search'

import '../styles/main.css'

Alpine.data('menu', menu)
Alpine.data('search', search)
Alpine.start()

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded')
})
