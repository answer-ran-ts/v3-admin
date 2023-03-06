import loginStore from './module/login'
import useInfoStore from './module/user'

const useStore = () => ({
  loginStore: loginStore(),
  useInfoStore: useInfoStore()
})

export default useStore
