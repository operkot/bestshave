import Alpine from 'alpinejs'

import menu from './components/menu'
import search from './components/search'
import heroShowcase from './components/hero-showcase'
import brandsSlider from './components/brands-slider'
import featuredCarousel from './components/featured-carousel'
import sidebar from './components/sidebar'

import '../styles/main.css'

Alpine.data('menu', menu)
Alpine.data('search', search)
Alpine.data('sidebar', sidebar)
Alpine.start()

document.addEventListener('DOMContentLoaded', () => {
  heroShowcase()
  brandsSlider()
  featuredCarousel()
})
