<template>
  <div class="container">
    <div v-if="isLoading" class="skeleton-sidebar"></div>
    <div v-else>
      <div class="sidebar" v-if="selectedCard !== null">
        <p>Selected Color: {{ grid[selectedCard] }}</p>
        <p>Additional information or actions for the selected card</p>
      </div>
    </div>
    <div class="grid">
      <div
        v-for="(color, index) in grid"
        :key="index"
        :style="{ backgroundColor: color }"
        :class="{ selected: isSelected(index) }"
        draggable="true"
        @dragstart="dragStart(index)"
        @dragover="dragOver(index)"
        @dragend="dragEnd"
        @click="selectCard(index)"
      ></div>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from "vue";

  export default {
    setup() {
      const grid = reactive([
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "teal",
        "brown",
        "gray",
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "teal",
        "brown",
        "gray",
        "red",
        "blue",
        "green",
        "yellow",
        "orange"
      ]);

      const selectedCard = ref(null);
      let draggingIndex = null;

      const dragStart = (index) => {
        draggingIndex = index;
      };

      const dragOver = (index) => {
        if (draggingIndex !== null) {
          const draggedColor = grid[draggingIndex];
          grid.splice(draggingIndex, 1);
          grid.splice(index, 0, draggedColor);
          draggingIndex = index;
        }
      };

      const dragEnd = () => {
        draggingIndex = null;
      };

      const selectCard = (index) => {
        selectedCard.value = index === selectedCard.value ? null : index;
      };

      const isSelected = (index) => {
        return index === selectedCard.value;
      };

      // Загрузка данных (имитация)
      const isLoading = ref(true);
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);

      return {
        grid,
        selectedCard,
        dragStart,
        dragOver,
        dragEnd,
        selectCard,
        isSelected,
        isLoading
      };
    }
  };
</script>

<style>
  .container {
    display: flex;
  }

  .sidebar {
    flex: 1;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .skeleton-sidebar {
    width: 200px;
    height: 100px;
    background-color: #f2f2f2;
    animation: skeleton-loading 1s infinite;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  .grid div {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  .grid div.selected {
    outline: 2px solid #000;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: #f2f2f2;
    }
    50% {
      background-color: #e6e6e6;
    }
    100% {
      background-color: #f2f2f2;
    }
  }
</style>
