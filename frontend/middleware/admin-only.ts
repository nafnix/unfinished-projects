export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()

  !auth.token && navigateTo('/login')
})
