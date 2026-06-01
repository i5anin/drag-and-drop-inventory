<template>
  <aside class="item-view">
    <button
      class="item-view__close"
      type="button"
      aria-label="Закрыть"
      @click="$emit('close')"
    >
      <img :src="closeIcon" alt="" />
    </button>

    <div class="item-view__preview">
      <ItemCard :item="item" :index="0" :interactive="false" />
    </div>

    <div class="item-view__skeleton">
      <span class="skeleton-line" style="width: 80%" />
      <span class="skeleton-line" style="width: 100%" />
      <span class="skeleton-line" style="width: 90%" />
      <span class="skeleton-line" style="width: 65%" />
    </div>

    <dl class="item-view__props">
      <div class="item-view__row">
        <dt>Цвет</dt>
        <dd>
          <span
            class="item-view__swatch"
            :style="{ backgroundColor: item.name ?? undefined }"
          />
          {{ item.name }}
        </dd>
      </div>
      <div class="item-view__row">
        <dt>Количество</dt>
        <dd>{{ item.quantity }}</dd>
      </div>
    </dl>

    <button class="item-view__delete" type="button" @click="$emit('delete')">
      Удалить предмет
    </button>
  </aside>
</template>

<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import closeIcon from '@/shared/assets/icons/close.svg'
import type { InventoryItem } from '@/shared/types/inventory'

defineProps<{ item: InventoryItem }>()
defineEmits<{ close: []; delete: [] }>()
</script>

<style scoped lang="scss">
.item-view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 260px;
  padding: 24px 18px 18px;
  background: rgba(38, 38, 38, 0.96);
  backdrop-filter: blur(4px);
  border-left: 1px solid #4d4d4d;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #ffffff;
  overflow-y: auto;
}

.item-view__close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
}

.item-view__preview {
  display: flex;
  justify-content: center;
  margin-top: 4px;
}

.item-view__skeleton {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-line {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
}

.item-view__props {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
}

.item-view__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(77, 77, 77, 0.5);

  dt {
    color: #8a8a8a;
  }

  dd {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
  }
}

.item-view__swatch {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

// Спокойная «ghost danger» кнопка: не кричит, но считывается как удаление.
.item-view__delete {
  margin-top: auto;
  padding: 11px;
  border: 1px solid rgba(224, 108, 108, 0.35);
  border-radius: 8px;
  background: rgba(224, 108, 108, 0.08);
  color: #e58a8a;
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(224, 108, 108, 0.16);
    border-color: rgba(224, 108, 108, 0.6);
    color: #f0a0a0;
  }

  &:active {
    background: rgba(224, 108, 108, 0.24);
  }

  &:focus-visible {
    outline: 2px solid rgba(224, 108, 108, 0.7);
    outline-offset: 2px;
  }
}
</style>
