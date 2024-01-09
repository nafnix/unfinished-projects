<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})

async function onLoginSuccess() {
  await navigateTo('/admin')
}
</script>

<template>
  <div class="mx-auto mt-50 w-20rem flex flex-col">
    <b class="mb-8 text-center text-3xl tracking-1">登录</b>

    <LoginForm @success="onLoginSuccess" />

    <p class="mt-2 text-center text-sm">
      还没有账号？
      <NuxtLink to="/register" class="text-light-tertiary dark:text-dark-tertiary">
        创建一个！
      </NuxtLink>
    </p>

    <div class="mx-auto mt-4">
      <DarkToggle />
    </div>
  </div>
</template>
