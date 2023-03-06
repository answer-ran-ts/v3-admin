import { defineStore } from 'pinia'

// import { ref } from 'vue'

const loginStore = defineStore({
  id: 'login',
  state: () => {
    return {
      token: ''
    }
  },
  getters: {},
  actions: () => {},
  persist: {
    enabled: true,
    strategies: [{ key: 'token', storage: localStorage, paths: ['token'] }]
  }
})

export default loginStore
