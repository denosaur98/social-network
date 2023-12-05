<template>
  <div class="user-page">
    <h1 class="user-name" v-if="selectedUser">{{ props.selectedUser.name }}</h1>
    <BaseSwiper/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseSwiper from './BaseSwiper.vue';

const props = defineProps(['selectedUser'])
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
}
</style>