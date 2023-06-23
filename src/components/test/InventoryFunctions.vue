<template>
  <draggable
    v-model="currentInventory"
    item-key="id"
    :empty-insert-placeholder="true"
    class="draggable-container"
    :move="checkMove"
  >
    <template #item="{ element }">
      <div class="draggable-item" v-if="element.name !== null">
        {{ element.name }}
      </div>
      <div v-else>
        <div class="draggable-item placeholder"></div>
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
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
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
      if (evt.draggedContext.element.name === null) {
        return false // Отмена операции перетаскивания для пустых ячеек
      }
    },
  },
}
</script>

<style>
.draggable-item {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  padding: 10px;
  margin: 0 5px;
  display: flex;
}

.draggable-container {
  display: flex;
  flex-direction: row;
}

.draggable-item.placeholder {
  background-color: #4b4b4b;
}
</style>
