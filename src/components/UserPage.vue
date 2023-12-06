<template>
  <div class="user-page">
    <h1 class="user-name" v-if="selectedUser">{{ props.selectedUser.name }}</h1>
    <div class="albums-block">
      <h1 class="albums-title">Альбомы:</h1>
      <BaseSwiper :selectedUserId="selectedUser ? selectedUser.id : null" :userAlbums="userAlbums" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import axios from 'axios'
import BaseSwiper from './BaseSwiper.vue'

const props = defineProps(['selectedUser'])
const urlAlbums = 'https://jsonplaceholder.typicode.com/albums'
const userAlbums = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(urlAlbums)
    userAlbums.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  box-shadow: 1px 3px 7px 1px #000;
  padding: 15px;
  font-family: 'Montserrat';
  .user-name {
    margin: 0;
    font-size: 20px;
  }
  .albums-block {
    position: absolute;
    margin-top: 30px;
    .albums-title {
      color: rgb(153, 0, 0);
      font-size: 25px;
    }
  }
}
</style>