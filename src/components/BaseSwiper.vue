<template>
  <swiper
    :slides-per-view="3"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop="true"
    class="swiper"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  position: absolute;
  width: 865px;
  margin-top: 30px;
  .slide {
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 269.6px !important;
  }
}
</style>  