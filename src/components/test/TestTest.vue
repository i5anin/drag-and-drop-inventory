<template>
  <div class="container">
    <RightTwo />
    <LeftOne />
    <BottomPanel />
  </div>
</template>
<script>
import LeftOne from './LeftOne.vue'
import RightTwo from './RightTwo.vue'
import BottomPanel from './BottomPanel.vue'

export default {
  components: {
    LeftOne,
    RightTwo,
    BottomPanel,
  },
}
</script>

<!-- <style src="./test.css"></style> -->
