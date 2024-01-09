<script setup lang="ts">
const emit = defineEmits(['success'])

const loginData = reactive({ email: '', password: '' })

const cssModule = useCssModule()

function focusHandler(e: FocusEvent) {
  const element = (e.target as HTMLInputElement)
  const parent = (element.parentElement as HTMLElement)

  if (parent.classList.contains(cssModule.active)) {
    parent.classList.remove(cssModule.active)

    if (element.value.length)
      parent.classList.add(cssModule.complete)
    else
      parent.classList.remove(cssModule.complete)
  }
  else {
    parent.classList.add(cssModule.active)
  }
}

const { login } = useAuthStore()

async function loginHandler() {
  await login(loginData)
  emit('success')
}
</script>

<template>
  <div class="space-y-4">
    <div :class="$style.input">
      <input id="email" v-model="loginData.email" type="email" @focus="focusHandler" @blur="focusHandler">
      <div>
        邮箱
      </div>
    </div>

    <div :class="$style.input">
      <input id="password" v-model="loginData.password" type="password" @focus="focusHandler" @blur="focusHandler">
      <div>
        密码
      </div>
    </div>
  </div>

  <button
    class="mt-4 h-10 w-full rounded line-height-10"
    bg="light-secondary dark:dark-secondary"
    text="center light-on-secondary dark:dark-on-secondary"
    @click="loginHandler"
  >
    登录
  </button>
</template>

<style module>
.input {
  position: relative;
}

.input *:nth-child(1) {
  height: 3rem;
  width: 100%;
  border: 1px solid rgba(149, 149, 149, 0.5);

  background-color: rgba(0, 0, 0, 0);
  border-radius: 0.375rem;
  padding: 0 1rem;
  outline: none;

  transition: border-color 0.15s ease-in-out;
}

.input *:nth-child(2) {
  @apply bg-light-background dark:bg-dark-background;
  position: absolute;
  pointer-events: none;

  padding: 1px 6px;

  top: 1.6rem;
  left: 0.625rem;

  transform: translateY(-50%);
  transition:
    font-size 0.15s ease-in-out,
    top 0.15s ease-in-out;
  /* color 0.15s ease-in-out; */
}

.input.active *:nth-child(2),
.input.complete *:nth-child(2) {
  top: 0;
  font-size: 0.75rem;
}

.input.active *:nth-child(1) {
  @apply border-light-primary border-2 shadow-inner dark:border-dark-primary;
}

.input.active *:nth-child(2) {
  @apply text-light-primary dark:text-dark-primary;
}
</style>
