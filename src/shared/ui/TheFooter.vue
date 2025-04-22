<template>
  <div class="container-footer">
    <div class="close-location-footer">
      <img :src="CloseSVG" alt="Close Icon" />
    </div>
    <div class="gradient-footer"></div>
  </div>
</template>

<script>
import CloseSVG from '@/shared/assets/close.svg'

export default {
  data() {
    return {
      CloseSVG,
    }
  },
}
</script>

<style lang="scss">
.container-footer {
  width: 785px;
  height: 72px;
  left: 32px;
  top: 556px;
  position: absolute;
  background: #262626;
  border-radius: 12px;
  overflow: hidden;
  border: 0.5px #4d4d4d solid;
}

.close-location-footer {
  width: 24px;
  height: 24px;
  left: 753px;
  top: 8px;
  position: absolute;
}

.close-footer {
  width: 12px;
  height: 12px;
  left: 6px;
  top: 6px;
  position: absolute;
  background: white;
}

.gradient-footer {
  width: 699px;
  height: 36px;
  left: 18px;
  top: 18px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 12px;
}
</style>
