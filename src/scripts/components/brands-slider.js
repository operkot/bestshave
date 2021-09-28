import Swiper, { Autoplay, EffectFade } from 'swiper/core'

Swiper.use([Autoplay, EffectFade])

const BRANDS_SLIDER_SEL = '.brands-slider'

export default () => {
  const slider = document.querySelector(BRANDS_SLIDER_SEL)

  if (!slider) return

  new Swiper(slider, {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: { delay: 3000 },
  })
}
