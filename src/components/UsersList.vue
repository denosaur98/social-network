<template>
  <div class="users-list">
    <div class="users-panel">
      <p class="user-item" v-for="userName in userNames" :key="userName.id" @click="selectUser(userName)">{{ userName.name }}</p>
    </div>
    <UserPage :selectedUser="selectedUser"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import UserPage from './UserPage.vue'

const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const userNames = ref([])
const selectedUser = ref(null)

axios.get(urlUsers)
.then(response => {
  userNames.value = response.data
  if (userNames.value.length > 0) {
    selectedUser.value = userNames.value[0]
  }
})
.catch(error => console.error(error))

function selectUser(user) {
  selectedUser.value = user
}
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 50px;
  .users-panel {
    display: block;
    width: 500px;
    height: 100%;
    padding: 15px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 1px 3px 7px 1px #000;
    .user-item {
      cursor: pointer;
      font-family: 'Montserrat';
      font-size: 20px;
      padding: 5px;
      border: 1px solid #000;
      border-radius: 5px;
      margin: 10px;
      &:hover {

        box-shadow: 1px 3px 7px 1px #000;
      }
    }
  }
}
</style>