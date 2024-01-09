<script setup>
import { contact } from '~/constants'
</script>

<template>
  <aside class="w-1/4">
    <h3 class="text-left">
      Contanct
    </h3>
    <dl class="text-0.875rem" text="light-on-surface-variant dark:dark-on-surface-variant">
      <div class="flex items-center gap-x-2">
        <dt><div class="i-carbon-email" /></dt>
        <dd>
          <NuxtLink :to="contact.email.url">
            {{ contact.email.text }}
          </NuxtLink>
        </dd>
      </div>

      <div class="flex items-center gap-x-2">
        <dt><div class="i-carbon-logo-github" /></dt>
        <dd>
          <NuxtLink :to="contact.github.url" target="_blank">
            {{ contact.github.text }}
          </NuxtLink>
        </dd>
      </div>

      <div class="flex items-center gap-x-2">
        <dt><div class="i-tabler-brand-bilibili" /></dt>
        <dd>
          <NuxtLink :to="contact.bilibili.url" target="_blank">
            {{ contact.bilibili.text }}
          </NuxtLink>
        </dd>
      </div>
    </dl>
    <!-- <div>
      <img src="https://i.pravatar.cc/1000" alt="Avatar" class="mx-auto w-36 rounded">
    </div> -->
  </aside>
</template>

<style scoped>
/* img {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
} */
</style>
