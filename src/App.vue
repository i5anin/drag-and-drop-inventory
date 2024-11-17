<template>
  <div>
    <InventoryPage  class="app-container" />
  </div>
</template>

<script>
import InventoryPage from '@/pages/InventoryPage.vue'

export default {
  name: 'App',
  components: { InventoryPage },
}
</script>

<style>
/* Центрируем контейнер с компонентом */
.app-container {
  display: flex;
  justify-content: center;  /* Горизонтальное центрирование */
  align-items: center;      /* Вертикальное центрирование */
  height: 100vh;            /* Занимает всю высоту экрана */
  background-color: #1e1e1e;
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
  height: 100%;
}

/* Подключение шрифта */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
</style>
