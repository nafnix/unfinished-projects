<template>
  <div class="w-full border rounded-0.375rem p-6 text-left">
    <NuxtLink class="title text-2xl tracking-0.1rem">
      标题
    </NuxtLink>

    <dl class="mt-2 flex gap-x-2">
      <div>
        <dt>
          <div class="i-carbon-calendar" />
        </dt>
        <dd>2023-12-16</dd>
      </div>

      <div>
        <dt>
          <div class="i-carbon-categories" />
        </dt>
        <dd>分类</dd>
      </div>

      <div>
        <dt>
          <div class="i-carbon-hashtag" />
        </dt>
        <dd>标签1</dd>
      </div>
      <div>
        <dt>
          <div class="i-carbon-hashtag" />
        </dt>
        <dd>标签1</dd>
      </div>
      <div>
        <dt>
          <div class="i-carbon-hashtag" />
        </dt>
        <dd>标签1</dd>
      </div>
    </dl>

    <p class="mt-4">
      阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴，阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴。
    </p>
  </div>
</template>

<style scoped>
dl {
  font-size: 0.875rem;
}
dl > div {
  display: flex;
}
dl > div dt {
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
}
</style>
