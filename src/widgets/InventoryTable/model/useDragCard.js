export function useDragCard(index, emit) {
  const cloned = ref(null)

  const start = (event) => {
    cloned.value = event.target.cloneNode(true)
    cloned.value.classList.add('dragging')
    document.body.appendChild(cloned.value)
    event.dataTransfer.setDragImage(cloned.value, 50, 50)
    emit('dragstart', index)
  }

  const over = () => emit('dragover', index)

  const end = () => {
    if (cloned.value) {
      document.body.removeChild(cloned.value)
      cloned.value = null
    }
    emit('dragend')
  }

  onBeforeUnmount(end)

  return { start, over, end }
}
