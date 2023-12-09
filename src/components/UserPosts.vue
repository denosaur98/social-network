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

onMounted(async () => {
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
  }
  .posts-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    .user-name {
      display: flex;
      align-items: flex-start;
      font-family: 'Montserrat';
      font-size: 25px;
      margin: 0;
      .item-title {
        color: rgb(153, 0, 0);
        font-size: 25px;
        margin-right: 10px;
      }
    }
    .post-item {
      .post-title {
        
      }
      .post-body {
        
      }
    }
  }
}
</style>