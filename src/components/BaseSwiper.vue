<template>
  <swiper
    :slides-per-view="3"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop="true"
    class="swiper"
  >
    <swiper-slide class="slide" v-for="(item, index) in filteredItems" :key="index">{{ item.title }}</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['userItems', 'selectedUserId', 'itemType'],
  computed: {
    filteredItems() {
      if (!this.selectedUserId) return []
      return this.userItems.filter(item => item.userId === this.selectedUserId)
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  position: absolute;
  width: 865px;
  .slide {
    cursor: pointer;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 269.6px !important;
    min-height: 80px;
  }
}
</style>  