<template>
  <div class="user-posts">
    <a href="/" class="link">
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="icon-arrow"/>
    </a>
    <div class="posts-block">
      <h1 class="user-name"><span class="item-title">Пользователь:</span> {{ props.username }}</h1>
      <div v-for="post in userPosts" :key="post.id" class="post-item">
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-body">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['userId', 'username'])
const store = useStore()
const userPosts = ref([])

onMounted(async() => {
  await store.dispatch('fetchUserPosts')
  userPosts.value = store.getters.getUserPosts.filter(post => post.userId === parseInt(props.userId))
})
</script>

<style lang="scss" scoped>
.user-posts {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 50px;
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    gap: 5px;
  }
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
  .posts-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    .user-name {
      display: flex;
      align-items: flex-start;
      font-family: 'Montserrat';
      font-size: 25px;
      margin: 0;
      margin-bottom: 15px;
      @media screen and (max-width: 480px) {
        font-size: 15px;
      }
      .item-title {
        color: rgb(153, 0, 0);
        font-size: 25px;
        margin-right: 10px;
        @media screen and (max-width: 480px) {
          font-size: 15px;
        }
      }
    }
    .post-item {
      border: 1px solid #000;
      border-radius: 5px;
      padding: 10px;
      .post-title {
        font-family: 'Montserrat';
        font-size: 20px;
        margin: 0;
      }
      .post-body {
        font-family: 'Montserrat';
        font-size: 15px;
        margin-bottom: 0;
      }
    }
  }
}
</style>