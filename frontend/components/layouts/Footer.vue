<script setup lang="ts">
const startYear = 2023
const copyrightYear = computed(() => {
  const lastYear = (new Date()).getFullYear()
  if (lastYear - startYear)
    return `${startYear} - ${lastYear}`
  else
    return startYear
})
</script>

<template>
  <footer class="mt-auto h-12 border-t p-4 text-xs text-black/60 dark:text-white/60">
    <div class="mx-auto max-w-def w-full">
      Copyright &copy; {{ copyrightYear }}
      |
      <NuxtLink to="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">
        CC BY-NC-SA 4.0 DEED
      </NuxtLink>
      |
      Powered by <NuxtLink to="https://nuxt.com/" target="_blank">
        Nuxt
      </NuxtLink>
    </div>
  </footer>
</template>
