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
