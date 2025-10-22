import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const idToken = ref('')

  function setToken(token: string) {
    idToken.value = token
    localStorage.setItem('google_id_token', token)
  }

  function removeToken() {
    idToken.value = ''
    localStorage.removeItem('google_id_token')
  }

  function syncFromLocalStorage() {
    idToken.value = localStorage.getItem('google_id_token') || ''
  }

  return { idToken, setToken, removeToken, syncFromLocalStorage }
})
