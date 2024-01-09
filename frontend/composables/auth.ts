import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const conf = useRuntimeConfig()

  const token = useCookie('token', {
    maxAge: conf.public.tokenExpires,
  })

  async function login(loginData: { email: string, password: string }) {
    const loginForm = new FormData()
    loginForm.append('username', loginData.email)
    loginForm.append('password', loginData.password)

    const data = await $fetch<{
      access_token: string
      expires_in: number
      token_type: 'Bearer'
    }>(`${conf.public.apiBase}/auth/login`, {
      method: 'POST',
      body: loginForm,
    })
    token.value = data.access_token
  }

  async function logout() {
    token.value = null
  }

  return { token, login, logout }
})
