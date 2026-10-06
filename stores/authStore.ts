import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const idToken = ref('')

    function setToken(token: string) {
      idToken.value = token
    }

    function removeToken() {
      idToken.value = ''
    }

    function syncFromLocalStorage() {
      try {
        const stored = localStorage.getItem('google_id_token')
        // 其他分頁移除 token（removeItem / clear）時，這裡也要清空
        idToken.value = stored ? JSON.parse(stored).idToken || '' : ''
      } catch {
        idToken.value = ''
      }
    }

    return { idToken, setToken, removeToken, syncFromLocalStorage }
  },
  {
    persist: {
      key: 'google_id_token',
    },
  },
)
