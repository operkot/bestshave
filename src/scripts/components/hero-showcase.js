import Swiper, { Autoplay, EffectFade } from 'swiper/core'

Swiper.use([Autoplay, EffectFade])

const HERO_SHOWCASE_SEL = '.hero-showcase'

export default () => {
  const slider = document.querySelector(HERO_SHOWCASE_SEL)

  if (!slider) return

  new Swiper(slider, {
    loop: true,
    effect: 'fade',
    allowTouchMove: false,
    autoplay: { delay: 5000 },
  })
}
