import { defineStore } from 'pinia'
import { ref } from 'vue'
const useInfoStore = defineStore(
  'user',
  () => {
    const userName = ref('哈哈哈')
    const roles = ref([1, 2, 4])
    //   模拟actions
    const changeName = () => {
      setTimeout(() => {
        userName.value = '你好'
      }, 2000)
    }
    //  数据持久化
    return {
      userName,
      roles,
      changeName
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ key: 'userName', storage: sessionStorage, paths: ['userName'] }]
    }
  }
)

export default useInfoStore
