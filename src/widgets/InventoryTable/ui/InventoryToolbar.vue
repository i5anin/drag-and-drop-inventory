<template>
  <footer class="add-bar">
    <!-- Скелетон, как в исходном футере: виден, пока не навели курсор. -->
    <div class="add-bar__skeleton" aria-hidden="true"></div>

    <!-- Кнопка проявляется при наведении или фокусе с клавиатуры. -->
    <button
      class="add-bar__btn"
      type="button"
      :disabled="isFull"
      @click="addItem"
    >
      <span class="add-bar__plus" aria-hidden="true">+</span>
      {{ isFull ? 'Инвентарь заполнен' : 'Добавить предмет' }}
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useInventoryGrid } from '../model/useInventoryGrid'

const { addItem, isFull } = useInventoryGrid()
</script>

<style scoped lang="scss">
.add-bar {
  position: absolute;
  left: 32px;
  top: 556px;
  width: 785px;
  height: 72px;
  background: #262626;
  border: 0.5px solid #4d4d4d;
  border-radius: 12px;
  overflow: hidden;
}

// Обе плашки занимают одно и то же место и кроссфейдятся.
.add-bar__skeleton,
.add-bar__btn {
  position: absolute;
  left: 18px;
  right: 18px;
  top: 18px;
  height: 36px;
  border-radius: 12px;
  transition: opacity 0.2s ease;
}

.add-bar__skeleton {
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  opacity: 1;
}

.add-bar__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #4d4d4d;
  background: #2e2e2e;
  color: #e8e8e8;
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    background: #383838;
    border-color: #5e5e5e;
  }

  &:active:not(:disabled) {
    background: #2a2a2a;
  }

  &:disabled {
    color: #888888;
    cursor: not-allowed;
  }
}

// Скелетон прячем, кнопку показываем — при наведении и при фокусе (a11y).
.add-bar:hover .add-bar__skeleton,
.add-bar:focus-within .add-bar__skeleton {
  opacity: 0;
}

.add-bar:hover .add-bar__btn,
.add-bar:focus-within .add-bar__btn {
  opacity: 1;
}

.add-bar__btn:focus-visible {
  opacity: 1;
  outline: 2px solid #6ea8fe;
  outline-offset: 2px;
}

.add-bar__plus {
  font-size: 16px;
  line-height: 1;
}
</style>
