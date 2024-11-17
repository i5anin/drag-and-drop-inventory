<!-- ItemView -->
<template>
  <div class="item-view">
    <ItemCard
      :color="selectedColor"
      :index="0"
      :isSelected="false"
      :isDraggable="false"
    />
    <p>
      Color:
      <span :style="{ color: selectedColor.name }">{{ selectedColor.name }}</span>
    </p>
    <p>Quantity: {{ selectedColor.quantity }}</p>
    <p>Additional information or actions for the selected card.</p>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';

export default {
  name: 'ItemView',
  components: {
    ItemCard,
  },
  props: {
    selectedColor: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.item-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: #1e1e1e;
  color: #fff;
  height: 100%;
  width: 50%;
  overflow-y: auto;
}
</style>

