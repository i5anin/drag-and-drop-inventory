<template>
  <div class="main_grid">
    <div class="grid_1">
      <div style="width: 105px; height: 100px; position: relative">
        <div class="grid_2">
          <div
            style="
              width: 48px;
              height: 48px;
              left: 0px;
              top: 6px;
              position: absolute;
              background: #7faa65;
            "
          ></div>
          <div
            style="
              width: 48px;
              height: 48px;
              left: 6px;
              top: 0px;
              position: absolute;
              background: rgba(184.24, 216.75, 151.73, 0.35);
              backdrop-filter: blur(12px);
            "
          ></div>
        </div>
        <div class="grid_3">
          <div class="grid_4"></div>
          <div class="number_items">4</div>
        </div>
      </div>
      <div class="grid_5">
        <div class="grid_2">
          <div
            style="
              width: 48px;
              height: 48px;
              left: 0px;
              top: 6px;
              position: absolute;
              background: #aa9765;
            "
          ></div>
          <div
            style="
              width: 48px;
              height: 48px;
              left: 6px;
              top: 0px;
              position: absolute;
              background: rgba(216.75, 186.84, 151.73, 0.35);
              backdrop-filter: blur(12px);
            "
          ></div>
        </div>
        <div class="grid_3">
          <div class="grid_4"></div>
          <div class="number_items">2</div>
        </div>
      </div>
      <div class="grid_5">
        <div class="grid_2">
          <div
            style="
              width: 48px;
              height: 48px;
              left: 0px;
              top: 6px;
              position: absolute;
              background: #656caa;
            "
          ></div>
          <div
            style="
              width: 48px;
              height: 48px;
              left: 6px;
              top: 0px;
              position: absolute;
              background: rgba(116.49, 128.54, 236.94, 0.35);
              backdrop-filter: blur(12px);
            "
          ></div>
        </div>
        <div class="grid_3">
          <div class="grid_4"></div>
          <div class="number_items">5</div>
        </div>
      </div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
    </div>
    <div class="grid_1">
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
    </div>
    <div class="grid_1">
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
    </div>
    <div class="grid_1">
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
    </div>
    <div
      style="
        justify-content: flex-start;
        align-items: flex-start;
        display: inline-flex;
      "
    >
      <div style="width: 105px; height: 100px; position: relative"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
      <div class="grid_5"></div>
    </div>
  </div>
</template>

<style>
.container {
  width: 849px;
  height: 660px;
  position: relative;
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

.grid_1 {
  border-bottom: 0.5px #4d4d4d solid;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.grid_2 {
  width: 54px;
  height: 54px;
  left: 26px;
  top: 23px;
  position: absolute;
}

.grid_3 {
  width: 16px;
  height: 16px;
  left: 88px;
  top: 83px;
  position: absolute;
}
.grid_4 {
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

.number_items {
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

.grid_5 {
  width: 105px;
  height: 100px;
  position: relative;
  border-left: 0.5px #4d4d4d solid;
}
</style>
