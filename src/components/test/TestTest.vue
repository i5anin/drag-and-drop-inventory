<template>
  <div class="grid-container">
    <div
      v-for="(row, rowIndex) in grid"
      :key="'row-' + rowIndex"
      class="grid-row"
    >
      <div
        v-for="(cell, colIndex) in row"
        :key="'cell-' + colIndex"
        class="grid-cell"
        :class="getCellClass(rowIndex, colIndex)"
        @click="handleCellClick(rowIndex, colIndex)"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  height: 300px;
}

.grid-row {
  display: flex;
  justify-content: space-between;
}

.grid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* Белый цвет */
  padding: 10px;
  margin-bottom: 10px;
}

.draggable-item-empty {
  background-color: #ffffff; /* Белый цвет */
  border: 2px dashed #dddddd; /* Пунктирная граница для пустых ячеек */
}

.draggable-item {
  cursor: pointer;
}

.selected {
  background-color: #ff0000; /* Красный цвет */
  color: #ffffff; /* Белый цвет */
}
</style>

<script>
export default {
  data() {
    return {
      grid: [],
      selectedItem: null,
    }
  },
  created() {
    this.initializeGrid()
  },
  methods: {
    initializeGrid() {
      this.grid = [
        ['Item 1', 'Item 1', 'Item 1', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ]
    },
    getCellClass(rowIndex, colIndex) {
      const cellValue = this.grid[rowIndex][colIndex]
      return {
        'draggable-item': cellValue !== '0',
        'draggable-item-empty': cellValue === '0',
      }
    },
    handleCellClick(rowIndex, colIndex) {
      const cellValue = this.grid[rowIndex][colIndex]

      if (cellValue === '0' && this.selectedItem !== null) {
        this.grid[rowIndex].splice(colIndex, 1, this.selectedItem)
        this.selectedItem = null
      } else if (cellValue !== '0') {
        this.selectedItem = cellValue
        this.grid[rowIndex].splice(colIndex, 1, '0')
      }
    },
  },
}
</script>
