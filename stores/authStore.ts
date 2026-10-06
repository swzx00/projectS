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

    return { idToken, setToken, removeToken }
  },
  {
    // 後台 JWT 只存在 sessionStorage：關閉分頁即清除，不會長期留在公開前台的網域
    // （重新整理預覽頁時，後台收到 ready 會重送 token）
    // persist plugin 只在 client 安裝，以函式延遲存取 sessionStorage，避免 server 端參照不存在的全域變數
    persist: {
      key: 'google_id_token',
      storage: {
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
      },
    },
  },
)
