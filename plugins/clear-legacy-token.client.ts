// 舊版把後台 JWT 存在 localStorage（key: google_id_token），改存 sessionStorage 後清除殘留的 token
export default defineNuxtPlugin(() => {
  try {
    localStorage.removeItem('google_id_token')
  } catch {}
})
