<template>
  <div class="user-page">
    <h1 class="user-name" v-if="selectedUser"><span class="item-title">Пользователь:</span> {{ props.selectedUser.name }}</h1>
    <div class="albums-block">
      <h1 class="item-title">Альбомы:</h1>
      <BaseSwiper :selectedUserId="selectedUser ? selectedUser.id : null" :userItems="userAlbums" itemType="album" />
    </div>
    <div class="posts-block">
      <h1 class="item-title">Посты:</h1>
      <BaseSwiper :selectedUserId="selectedUser ? selectedUser.id : null" :userItems="userPosts" itemType="post" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import axios from 'axios'
import BaseSwiper from './BaseSwiper.vue'

const props = defineProps(['selectedUser'])
const urlAlbums = 'https://jsonplaceholder.typicode.com/albums'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const userAlbums = ref([])
const userPosts = ref([])

onMounted(async() => {
  try {
    const [albumsResponse, postsResponse] = await Promise.all([
      axios.get(urlAlbums),
      axios.get(urlPosts)
    ])
    userAlbums.value = albumsResponse.data
    userPosts.value = postsResponse.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  font-family: 'Montserrat';
  .user-name {
    margin: 0;
    font-size: 25px;
  }
  .albums-block {
    position: absolute;
    margin-top: 30px;
    @media screen and (max-width: 840px) {
      margin-top: 50px;
    }
  }
  .posts-block {
    position: absolute;
    margin-top: 270px;
  }
  .item-title {
    color: rgb(153, 0, 0);
    font-size: 25px;
  }
}
</style>