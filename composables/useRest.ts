import type { UseFetchOptions } from "nuxt/app";

export function useRest<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
