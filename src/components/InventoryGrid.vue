<template>
  <div class="container-grid">
    <div class="main_grid">
      <div class="line border" v-for="row in gridData" :key="row.id">
        <div class="cell" v-for="cell in row.cells" :key="cell.id">
          <div class="position-color-item">
            <div :class="`color-item color-item-${cell.color}`"></div>
            <div :class="`color-item-blur color-item-${cell.color}-blur`"></div>
          </div>
          <div class="frame-layout" v-if="cell.number !== undefined">
            <div class="number-frame"></div>
            <div class="number-items">
              {{ cell.number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridComponent',
  data() {
    return {
      gridData: [
        {
          id: 1,
          cells: [
            { id: 1, color: 1, number: 4 },
            { id: 2, color: 2, number: 2 },
            { id: 3, color: 3, number: 5 },
            { id: 4 },
            { id: 5 },
          ],
        },
        {
          id: 2,
          cells: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
        },
        {
          id: 3,
          cells: [{ id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }],
        },
        {
          id: 4,
          cells: [{ id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }],
        },
        {
          id: 5,
          cells: [{ id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.container-grid {
  width: 849px;
  height: 660px;
  background: #1d1d1d;
}

.main_grid {
  left: 292px;
  top: 32px;
  position: absolute;
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  background: #262626;
  border: 0.5px #4d4d4d solid;
}

.number-frame {
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #262626;
  border-top-left-radius: 6px;
  border: 0.5px #4d4d4d solid;
}

.line {
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.border:not(:last-child) {
  border-bottom: 0.5px #4d4d4d solid;
}

.position-color-item {
  width: 54px;
  height: 54px;
  left: 26px;
  top: 23px;
  position: absolute;
}

.frame-layout {
  width: 16px;
  height: 16px;
  left: 88px;
  top: 83px;
  position: absolute;
}

.number-items {
  width: 8px;
  height: 12px;
  left: 4px;
  top: 2px;
  position: absolute;
  opacity: 0.4;
  text-align: center;
  color: white;
  font-size: 10px;
  font-family: Inter;
  font-weight: 500;
  word-wrap: break-word;
}

.cell {
  width: 105px;
  height: 100px;
  position: relative;
  border-left: 0.5px #4d4d4d solid;
}

.cell:first-child {
  border-left: none;
}

.color-item {
  width: 48px;
  height: 48px;
  left: 0px;
  top: 6px;
  position: absolute;
}

.color-item-blur {
  width: 48px;
  height: 48px;
  left: 6px;
  top: 0px;
  position: absolute;
  backdrop-filter: blur(12px);
}

.color-item-1 {
  background: #7faa65;
}

.color-item-1-blur {
  background: rgba(184.24, 216.75, 151.73, 0.35);
}

.color-item-2 {
  background: #aa9765;
}

.color-item-2-blur {
  background: rgba(216.75, 186.84, 151.73, 0.35);
}

.color-item-3 {
  background: #656caa;
}

.color-item-3-blur {
  background: rgba(116.49, 128.54, 236.94, 0.35);
}
</style>
