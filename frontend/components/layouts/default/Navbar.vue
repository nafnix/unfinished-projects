<script setup lang="ts">
import { appName, appRepo } from '~/constants'
</script>

<template>
  <header class="fixed left-0 top-0 w-full border-b backdrop-blur">
    <div class="mx-auto h-12 max-w-def flex items-center px-2">
      <NuxtLink href="/" class="title text-xl">
        {{ appName }}
      </NuxtLink>
      <nav class="ml-10 space-x-8">
        <NuxtLink to="/" class="nav-btn">
          首页
        </NuxtLink>
        <NuxtLink to="/categories" class="nav-btn">
          分类
        </NuxtLink>
        <NuxtLink to="/tags" class="nav-btn">
          标签
        </NuxtLink>
        <NuxtLink to="/archives" class="nav-btn">
          归档
        </NuxtLink>
        <NuxtLink to="/about" class="nav-btn">
          关于
        </NuxtLink>
      </nav>

      <div class="ml-auto flex space-x-2">
        <DarkToggle class="nav-btn" />
        <NuxtLink i-carbon-logo-github class="block text-xl nav-btn" :to="appRepo" target="_blank" />
      </div>
    </div>
  </header>
</template>
