<!-- ItemView -->
<template>
  <div class="sidebar" v-if="selectedColor !== null">
    <p>
      Цвет:
      <span :style="{ color: selectedColor.name }">{{
          selectedColor.name
        }}</span>
    </p>
    <p>Количество: {{ selectedColor.quantity }}</p>
    <p>Дополнительная информация или действия для выбранной карты</p>
  </div>
</template>

<script>
export default {
  name: 'ItemView',
  props: {
    selectedColor: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
/* Растягиваем компонент на всю доступную высоту и ширину */
.sidebar {
  display: flex;
  flex-direction: column;  /* Расположение элементов по вертикали */
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;  /* Занимает всю доступную высоту родителя */
  width: 50%;   /* Занимает всю доступную ширину родителя */
  padding: 10px;
  overflow-y: auto;  /* Если контента больше, чем пространство, появляется прокрутка */
}
</style>
