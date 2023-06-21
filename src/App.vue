<template>
  <div>
    <MainTable />
  </div>
</template>

<script>
import MainTable from '@/components/MainTable.vue'

export default {
  name: 'App',
  components: {
    MainTable,
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
