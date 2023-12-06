<template>
  <swiper
    :slides-per-view="3"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop="true"
    class="swiper"
  >
    <swiper-slide class="slide" v-for="(album, index) in filteredAlbums" :key="index">{{ album.title }}</swiper-slide>
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
  props: ['userAlbums', 'selectedUserId'],
  computed: {
    filteredAlbums() {
      if (!this.selectedUserId) return []
      return this.userAlbums.filter(album => album.userId === this.selectedUserId)
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
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 269.6px !important;
    min-height: 60px;
  }
}
</style>  