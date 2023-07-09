import Swiper, {
  Navigation,
  EffectFade,
  Pagination,
  Thumbs,
  Controller,
  FreeMode,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".auctions-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, EffectFade, Pagination, FreeMode],
  autoHeight: true,
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});
