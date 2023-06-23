<template>
  <div class="container-grid">
    <div class="main_grid">
      <div class="line border">
        <div class="cell">
          <div class="position-color-item">
            <div class="color-item color-item-1"></div>
            <div class="color-item-blur color-item-1-blur"></div>
          </div>
          <div class="frame-layout">
            <div class="number-frame"></div>
            <div class="number-items">4</div>
          </div>
        </div>
        <div class="cell">
          <div class="position-color-item">
            <div class="color-item color-item-2"></div>
            <div class="color-item-blur color-item-2-blur"></div>
          </div>
          <div class="frame-layout">
            <div class="number-frame"></div>
            <div class="number-items">2</div>
          </div>
        </div>
        <div class="cell">
          <div class="position-color-item">
            <div class="color-item color-item-3"></div>
            <div class="color-item-blur color-item-3-blur"></div>
          </div>
          <div class="frame-layout">
            <div class="number-frame"></div>
            <div class="number-items">5</div>
          </div>
        </div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="line border">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="line border">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="line border">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="line border">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-grid {
  width: 849px;
  height: 660px;
  // position: relative;
  background: #1d1d1d;
}

.main_grid {
  left: 292px;
  top: 32px;
  position: absolute;
  background: #262626;
  border-radius: 12px;
  border-left: 0.5px #4d4d4d solid;
  border-top: 0.5px #4d4d4d solid;
  border-right: 0.5px #4d4d4d solid;
  border-bottom: 0.5px #4d4d4d solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
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

.number-frame {
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #262626;
  border-top-left-radius: 6px;
  border-left: 0.5px #4d4d4d solid;
  border-top: 0.5px #4d4d4d solid;
  border-right: 0.5px #4d4d4d solid;
  border-bottom: 0.5px #4d4d4d solid;
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
