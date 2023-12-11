<template>
  <swiper
    :slides-per-view="3"
    :space-between="swiperStyles.spaceBetween"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    loop="true"
    :class="swiperClass"
  >
    <swiper-slide class="slide" v-for="(item, index) in itemsToDisplay" :key="index">
      <div class="user-item">
        <h1 class="item-title">{{ item.title }}</h1>
        <img :src="item.url" class="album-image">
      </div>
    </swiper-slide>
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
    itemsToDisplay() {
      if (this.itemType === 'albums') {
        return this.userItems
      } else {
        return this.selectedUserId ? this.filteredItems : this.userItems
      }
    },
    filteredItems() {
      if (!this.selectedUserId) return []
      return this.userItems.filter(item => item.userId === this.selectedUserId)
    },
    swiperClass() {
      return this.itemType === 'albums' ? 'swiper-albums' : 'swiper-user-page'
    },
    swiperStyles() {
      return {
        spaceBetween: this.itemType === 'albums' ? 120 : 10
      }
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
.swiper-user-page {
  position: absolute;
  width: 63.32vw;
  @media screen and (max-width: 575px) {
    width: 85vw;
  }
  .slide {
    cursor: pointer;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    min-height: 100px;
    box-sizing: border-box;
    .user-item {
      margin: 0;
      min-height: 120px;
      overflow: hidden;
      .item-title {
        margin: 0;
        font-size: 20px;
        @media screen and (max-width: 820px) {
          font-size: 13px;
        }
        @media screen and (max-width: 430px) {
          font-size: 10px;
        }
      }
    }
  }
}
.swiper-albums {
  width: 1205px;
  margin: 0;
  .slide {
    cursor: pointer;
    box-sizing: border-box;
    min-height: 80px;
    .user-item {
      border: 1px solid #000;
      border-radius: 5px;
      padding: 10px;
      width: 300px;
      @media screen and (max-width: 575px) {
        width: 250px;
      }
      .item-title {
        font-family: 'Montserrat';
        font-size: 20px;
        width: 300px;
        height: 80px;
        margin: 0;
        margin-bottom: 10px;
        @media screen and (max-width: 575px) {
          width: 250px;
        }
      }
      .album-image {
        width: 300px;
        height: 300px;
        @media screen and (max-width: 575px) {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
}
</style>