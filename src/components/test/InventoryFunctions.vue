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
        :class="{ placeholder: isPlaceholder(element) }"
      >
        {{ getItemName(element) }}
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
      maxInventorySize: 25,
      currentInventory: [],
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
      return this.getItemName(evt.draggedContext.element) !== null
    },
    isPlaceholder(item) {
      return item.name === null
    },
    getItemName(item) {
      return item.name || ' '
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
