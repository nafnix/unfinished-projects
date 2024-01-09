<script setup lang="ts">
import { appName } from '~/constants'
</script>

<template>
  <header class="fixed left-0 top-0 h-12 w-full flex items-center border-b px-2">
    <NuxtLink to="/admin" class="text-xl">
      {{ appName }}
    </NuxtLink>
  </header>
</template>
