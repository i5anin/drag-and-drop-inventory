<template>
  <div
    :style="{ backgroundColor: color.name }"
    :class="{ selected: isSelected }"
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
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['dragstart', 'dragover', 'dragend', 'click'],
  setup(props, { emit }) {
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
      dragStart,
      dragOver,
      dragEnd,
      selectCard,
    }
  },
}
</script>
