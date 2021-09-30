import Swiper, { Navigation, Pagination } from 'swiper/core'

Swiper.use([Navigation, Pagination])

const FEATURED_CAROUSEL_SEL = '.featured-carousel'

export default () => {
  const carousel = document.querySelector(FEATURED_CAROUSEL_SEL)

  if (!carousel) return

  new Swiper(carousel, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.featured-next',
      prevEl: '.featured-prev',
    },
    pagination: {
      el: '.featured-pagination',
      clickable: true,
      type: 'bullets',
      bulletClass: 'featured-dot',
      bulletActiveClass: 'is-active',
      clickableClass: 'is-clickable',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  })
}
