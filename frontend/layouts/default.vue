<template>
  <LayoutsDefaultNavbar />
  <main class="mx-auto max-w-def w-full flex flex-1 gap-4 py-20 text-center">
    <LayoutsDefaultLeftSide />
    <slot />
  </main>
  <LayoutsFooter />
</template>
