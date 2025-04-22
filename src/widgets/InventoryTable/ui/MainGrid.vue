<template>
  <div class="main-grid">
    <div class="grid">
      <template v-for="(color, index) in colorGrid" :key="index">
        <ItemCard
          v-if="color"
          :color="color"
          :index="index"
          :isSelected="isCardSelected(index)"
          @dragstart="handleDragStart(index)"
          @dragover="handleDragOver(index)"
          @dragend="handleDragEnd"
          @click="toggleCardSelection(index)"
        />
        <div v-else class="cell empty" />
      </template>
    </div>
    <ItemView v-if="selectedColor" :selected-color="selectedColor" />
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue'
import ItemView from './ItemView.vue'
import { useInventoryGrid } from '../model/useInventoryGrid.js'

export default {
  name: 'MainGrid',
  components: {
    ItemCard,
    ItemView,
  },
  setup() {
    return useInventoryGrid()
  },
}
</script>

<style lang="scss" scoped>
@import '../style/mainGrid.scss';
</style>
