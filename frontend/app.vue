<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  @apply bg-light-background text-light-on-surface;
}

html * {
  @apply border-light-outline;
}

html.dark {
  @apply bg-dark-background text-dark-on-surface;
}

html.dark * {
  @apply border-dark-outline;
}

html,
body {
  height: 100%;
}

#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
