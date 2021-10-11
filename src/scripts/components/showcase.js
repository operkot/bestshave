import Swiper, { Thumbs } from 'swiper/core'

Swiper.use([Thumbs])

const SHOWCASE_MAIN_SEL = '.showcase-main'
const SHOWCASE_THUMBS_SEL = '.showcase-thumbs'

export default () => {
  const thumbsSwiper = new Swiper(SHOWCASE_THUMBS_SEL, {
    slidesPerView: 4,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })

  new Swiper(SHOWCASE_MAIN_SEL, {
    slidesPerView: 1,
    allowTouchMove: false,
    thumbs: {
      swiper: thumbsSwiper,
    },
  })
}
