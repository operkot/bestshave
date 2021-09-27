import Swiper, { Autoplay, EffectFade } from 'swiper/core'

Swiper.use([Autoplay, EffectFade])

const HERO_SHOWCASE_SEL = '.hero-showcase'

export default () => {
  new Swiper(HERO_SHOWCASE_SEL, {
    loop: true,
    effect: 'fade',
    allowTouchMove: false,
    autoplay: { delay: 5000 },
  })
}
