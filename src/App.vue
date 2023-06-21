<template>
  <div>
    <MainPages />
  </div>
</template>

<script>
import MainPages from '@/components/MainPages.vue'

export default {
  name: 'App',
  components: {
    MainPages,
  },
}
</script>

<style>
body {
  /* Стили по умолчанию для body */
  background-color: #1e1e1e;
  color: #fff;
}
</style>
