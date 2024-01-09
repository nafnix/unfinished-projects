import type { UseFetchOptions } from '#app'

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const auth = useAuthStore()
  const conf = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: conf.public.apiBase,

    // set user token if connected
    headers: auth.token
      ? { Authorization: `Bearer ${auth.token}` }
      : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  }

  return useFetch(url, { ...defaults, ...options })
}
