<template>
  <draggable
    v-model="currentInventory"
    item-key="id"
    :empty-insert-placeholder="true"
    class="draggable-container"
    :move="checkMove"
  >
    <template #item="{ element }">
      <div
        class="draggable-item"
        :class="{ placeholder: element.name === null }"
      >
        {{ element.name || ' ' }}
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  data() {
    return {
      initialInventory: [
        { id: 1, name: 'Style 1' },
        { id: 2, name: 'Style 2' },
        { id: 3, name: 'Style 3' },
        { id: 4, name: 'Style 4' },
      ],
      maxInventorySize: 25, // Максимальный размер инвентаря
      currentInventory: [], // Свойство данных для хранения текущей инвентаризации
    }
  },
  created() {
    this.generateInventory()
  },
  methods: {
    generateInventory() {
      const emptyItemsCount =
        this.maxInventorySize - this.initialInventory.length
      const emptyItems = Array.from(
        { length: emptyItemsCount },
        (_, index) => ({
          id: this.initialInventory.length + index + 1,
          name: null,
        })
      )
      this.currentInventory = [...this.initialInventory, ...emptyItems]
    },
    checkMove(evt) {
      return evt.draggedContext.element.name !== null
    },
  },
}
</script>

<style>
.draggable-item {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  outline: 1px solid black;
}

.draggable-container {
  border-radius: 12px;
  grid-template-columns: repeat(5, 100px);
  display: grid;
}

.draggable-item.placeholder {
  background-color: #4b4b4b;
}
</style>
