<template>
  <div
    :style="{ backgroundColor: color.name }"
    :class="{ selected: isSelected(index) }"
    draggable="true"
    @dragstart="dragStart"
    @dragover="dragOver"
    @dragend="dragEnd"
    @click="selectCard"
  >
    <p v-if="color.quantity !== null" class="color-quantity">
      {{ color.quantity }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    selectedCard: {
      type: Object,
      required: true,
    },
  },
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  setup(props, { emit }) {
    const isSelected = (index) => {
      return index === props.selectedCard
    }

    const dragStart = () => {
      emit('dragstart', props.index)
    }

    const dragOver = () => {
      emit('dragover', props.index)
    }

    const dragEnd = () => {
      emit('dragend')
    }

    const selectCard = () => {
      emit('click', props.index)
    }

    return {
      isSelected,
      dragStart,
      dragOver,
      dragEnd,
      selectCard,
    }
  },
}
</script>
