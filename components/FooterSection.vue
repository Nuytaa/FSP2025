<template>
  <div class="flight-banner mx-auto text-white d-flex flex-column justify-content-between p-5">
    <div class="position-relative flex-grow-1 d-flex justify-content-center align-items-center">
      <h1 class="banner-title z-1 mb-0">Полет<span class="highlight">ИИ</span>м</h1>
    </div>
    <img style="width:600px; height:600px; margin-top: -15rem; margin-left: 30rem;" src="/public/plane.png">
    <div style="font-size: 32px;" class="footer-info d-flex justify-content-between text-white-50 small px-2">
      <span>ПолетИИм: 2025</span>
      <a href="#" class="text-white-50 text-decoration-underline">Политика конфиденциальности</a>
      <span>iTeam</span>
    </div>
  </div>
</template>

<script setup>
// Логики не требуется
</script>

<style scoped>
.flight-banner {
  width: 1856px;
  height: 800px;
  background-color: #007bff; /* основной синий цвет */
  border-radius: 1rem;
  position: relative;
}

.banner-title {
  margin-top: -5rem;
  font-size: 19rem;
  font-weight: bold;
}

.highlight {
  color: white;
}

.airplane-icon {
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.3);
  transform: rotate(20deg);
  z-index: 0;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>