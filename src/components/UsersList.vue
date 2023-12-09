<template>
  <div class="users-list" @click="closeDropdown">
    <div class="users-panel">
      <p class="user-item" v-for="userName in userNames" :key="userName.id" @click="toggleDropdown(userName)">{{ userName.name }}</p>
      <div v-if="dropdown" class="dropdown-menu" :style="dropdownStyle" @click.stop>
        <a href="#" class="dropdown-item" @click="goToAlbums">Перейти к альбомам</a>
        <a href="#" class="dropdown-item" @click="goToPosts(selectedUser.id)">Перейти к постам</a>
      </div>
    </div>
    <UserPage :selectedUser="selectedUser"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import UserPage from './UserPage.vue'

const router = useRouter()
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const userNames = ref([])
const selectedUser = ref(null)
const dropdown = ref(false)
const dropdownStyle = ref({
  top: '0',
  left: '0'
})

axios.get(urlUsers)
  .then(response => {
    userNames.value = response.data
    if (userNames.value.length > 0) {
      selectedUser.value = userNames.value[0]
    }
  })
  .catch(error => console.error(error))

function toggleDropdown(user) {
  if (dropdown.value && selectedUser.value.id === user.id) {
    closeDropdown()
  } else {
    closeDropdown()
    selectedUser.value = user
    dropdown.value = !dropdown.value
    updateDropdownPosition(event)
    event.stopPropagation()
  }
}

function updateDropdownPosition(event) {
  if(event.target) {
    const rect = event.target.getBoundingClientRect()
    dropdownStyle.value.top = rect.bottom + 'px'
    dropdownStyle.value.left = rect.left + 'px'
  }
}

function closeDropdown() {
  dropdown.value = false
}

function goToPosts() {
  closeDropdown()
  router.push({ name: 'UserPosts', params: { userId: selectedUser.value.id, username: selectedUser.value.name.toLowerCase() }})
}


function goToAlbums() {
  closeDropdown()
  router.push({ name: 'UserAlbums', params: { username: selectedUser.value.name.toLowerCase() }})
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
    .dropdown-menu {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      background: #fff;
      border-radius: 5px;
      box-shadow: 1px 3px 7px 1px #000;
      padding: 10px;
      gap: 10px;
      margin-top: 3px;
      .dropdown-item {
        cursor: pointer;
        font-weight: 600;
        margin: 0px;
        font-family: 'Montserrat';
        text-decoration: none;
        color: #000;
        &:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }
      }
    }
  }
}
</style>