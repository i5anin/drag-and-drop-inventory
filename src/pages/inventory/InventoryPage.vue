<template>
  <main class="inventory-layout">
    <LeftInfo />
    <MainGrid />
    <InventoryToolbar />
  </main>
</template>

<script setup lang="ts">
import LeftInfo from '@/shared/ui/LeftInfo.vue'
import MainGrid from '@/widgets/InventoryTable/ui/MainGrid.vue'
import InventoryToolbar from '@/widgets/InventoryTable/ui/InventoryToolbar.vue'
</script>

<style scoped lang="scss">
// Фиксированная «сцена» по размеру макета — внутри неё всё спозиционировано
// абсолютно, а саму сцену центрируем во вьюпорте (см. .app в App.vue).
.inventory-layout {
  position: relative;
  width: 849px;
  height: 660px;
}
</style>
