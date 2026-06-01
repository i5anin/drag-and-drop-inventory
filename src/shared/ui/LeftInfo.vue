<template>
  <div class="info-card">
    <div class="info-card__preview">
      <img class="info-card__img" src="../assets/images/nicebg.png" alt="" />
      <div class="info-card__glass"></div>
    </div>

    <div class="info-card__lines">
      <span class="skeleton skeleton--title"></span>
      <span class="skeleton" style="width: 100%"></span>
      <span class="skeleton" style="width: 88%"></span>
      <span class="skeleton" style="width: 76%"></span>
      <span class="skeleton" style="width: 64%"></span>
      <span class="skeleton skeleton--short"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-card {
  position: absolute;
  left: 32px;
  top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 236px;
  padding: 18px 14px 22px;
  background: #262626;
  border: 0.5px solid #4d4d4d;
  border-radius: 12px;
}

.info-card__preview {
  position: relative;
  flex-shrink: 0;
  width: 208px;
  height: 224px;
  border-radius: 8px;
  overflow: hidden;
}

.info-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// Матовое стекло поверх картинки (как в макете).
.info-card__glass {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

.info-card__lines {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 4px;
}

.skeleton {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51%, #333333 100%);
}

.skeleton--title {
  width: 70%;
  height: 16px;
  margin-bottom: 4px;
}

.skeleton--short {
  width: 45%;
}
</style>
