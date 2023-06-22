<template>
  <draggable
    v-model="myArray"
    group="people"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
    :empty-insert-placeholder="true"
  >
    <template #item="{ element }">
      <div class="draggable-item" v-if="element.id !== null">
        {{ element.name }}
      </div>
    </template>
    <template #empty="{ index }">
      <div
        class="draggable-item draggable-item-empty"
        :key="'empty-' + index"
      ></div>
    </template>
  </draggable>
</template>

<style>
.draggable-item {
  background-color: #ffffff; /* Белый цвет */
  padding: 10px;
  margin-bottom: 10px;
}

.draggable-item-empty {
  height: 50px;
  background-color: #ffffff; /* Белый цвет */
  padding: 10px;
  margin-bottom: 10px;
  border: 2px dashed #dddddd; /* Пунктирная граница для пустых ячеек */
}
</style>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      myArray: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
      drag: false,
    }
  },
}
</script>
