<template>
  <div class="user-posts">
    <a href="/" class="link">
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="icon-arrow"/>
    </a>
    <div class="albums-block">
      <h1 class="user-name"><span class="item-title">Пользователь:</span> {{ props.username }}</h1>
      <BaseSwiper :userItems="userAlbums" :selectedUserId="parseInt(props.userId, 10)" itemType="albums"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import BaseSwiper from './BaseSwiper.vue';

const props = defineProps(['userId', 'username'])
const store = useStore()
const userAlbums = ref([])

onMounted(async () => {
  await store.dispatch('fetchUserAlbums')
  userAlbums.value = store.getters.getUserAlbums.filter(album => album.albumId === parseInt(props.userId))
})
</script>

<style lang="scss" scoped>
.user-posts {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 50px;
  border: 1px solid #000;
  box-shadow: 1px 3px 7px 1px #000;
  border-radius: 5px;
  .link {
    color: #000;
    .icon-arrow {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    &:hover {
      opacity: 0.5;
    }
  }
  .albums-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
    .user-name {
      display: flex;
      align-items: flex-start;
      font-family: 'Montserrat';
      font-size: 25px;
      margin: 0;
      margin-bottom: 15px;
      .item-title {
        color: rgb(153, 0, 0);
        font-size: 25px;
        margin-right: 10px;
      }
    }
    
  }
}
</style>