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
        if (stored) {
          const parsed = JSON.parse(stored)
          idToken.value = parsed.idToken || ''
        }
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
