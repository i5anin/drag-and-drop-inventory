<template>
  <div class="container-left">
    <div class="container-text">
      <div class="container-img">
        <div class="img">
          <img src="../../assets/nicebg.png" />
        </div>
      </div>
      <div class="blur"></div>
    </div>
    <div class="text">
      <div class="text-skeleton-1"></div>
      <div class="text-skeleton-2"></div>
      <div class="text-skeleton-3"></div>
      <div class="text-skeleton-4"></div>
      <div class="text-skeleton-5"></div>
      <div class="text-skeleton-6"></div>
      <div class="text-skeleton-7"></div>
    </div>
  </div>
</template>

<style>
.container-left {
  height: 500px;
  padding-top: 18px;
  padding-bottom: 24px;
  padding-left: 14px;
  padding-right: 14px;
  left: 32px;
  top: 32px;
  position: absolute;
  background: #262626;
  border-radius: 12px;
  overflow: hidden;
  border-left: 0.5px #4d4d4d solid;
  border-top: 0.5px #4d4d4d solid;
  border-right: 0.5px #4d4d4d solid;
  border-bottom: 0.5px #4d4d4d solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: inline-flex;
}

.container-text {
  width: 208px;
  height: 240px;
  position: relative;
}
.container-img {
  width: 200px;
  height: 240px;
  left: 4px;
  top: 0px;
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.img {
  width: 490px;
  height: 789px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.blur {
  width: 208px;
  height: 240px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(12px);
}

.text {
  width: 190px;
  height: 198px;
  position: relative;
}

.text-skeleton-1 {
  width: 155px;
  height: 10px;
  left: 17px;
  top: 50px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}

.text-skeleton-2 {
  width: 190px;
  height: 26px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 8px;
}

.text-skeleton-3 {
  width: 190px;
  height: 10px;
  left: 0px;
  top: 76px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}

.text-skeleton-4 {
  width: 170px;
  height: 10px;
  left: 10px;
  top: 102px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}

.text-skeleton-5 {
  width: 160px;
  height: 10px;
  left: 15px;
  top: 128px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}

.text-skeleton-6 {
  width: 140px;
  height: 10px;
  left: 25px;
  top: 154px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}

.text-skeleton-7 {
  width: 80px;
  height: 10px;
  left: 55px;
  top: 188px;
  position: absolute;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: 4px;
}
</style>
