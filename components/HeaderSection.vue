<template>
  <div class="main-wrapper">
    <header class="hero-section position-relative text-white">
      <img src="/osnova.png" alt="Hero image" class="hero-img" />

      <!-- Top Nav Elements -->
      <div class="top-bar d-flex justify-between align-items-center px-4 py-3">
        <button class="btn location-btn">ПолетИИм</button>
        <h1 class="hero-title m-0 text-center flex-grow-1">Открывая мир</h1>
        <button class="btn burger-btn d-flex justify-content-center align-items-center">
          <div class="burger-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </button>
      </div>

      <!-- Hero Content -->
      <div class="hero-content position-absolute text-center text-white">
        <p class="hero-description">
          Исследуйте культуру, природу и гастрономию <br>разных стран. Выбирайте тот, который лучше<br> всего соответствует вашему вкусу
        </p>
        <div class="d-flex justify-content-left mt-3 flex-wrap gap-3">
          <button class="btn plan-btn">Запланировать</button>
          <button class="btn schedule-btn">Расписание</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
// No specific logic yet
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Calibri:wght@400;700&display=swap');

* {
  font-family: 'Calibri', sans-serif;
}

.main-wrapper {
  max-width: 1856px;
  margin: 32px auto;
  padding: 0 32px;
}

.hero-section {
  height: 900px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-bar {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  z-index: 10;
}

.location-btn {
  background-color: #fff;
  color: #177FD1;
  font-size: 25px;
  font-weight: 700;
  border-radius: 40px;
  width: 220px;
  height: 82px;
  letter-spacing: -0.07em;
}

.hero-title {
  font-size: 82px;
  font-weight: 700;
  color: white;
}

.burger-btn {
  width: 112px;
  height: 82px;
  background-color: #fff;
  border-radius: 40px;
  border: none;
}

.burger-lines {
  width: 36px;
}

.line {
  height: 2px;
  background-color: #177FD1;
  margin: 6px 0;
}

.hero-content {
  top: 60%;
  left: 40%;
}

.hero-description {
  text-align:left;
  font-size: 32px;
  font-weight: 700;
}

.plan-btn {
  width: 260px;
  height: 83px;
  background-color: white;
  color: #177FD1;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 40px;
  border: none;
  font-size: 25px;
}

.schedule-btn {
  border: 3px solid white;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 40px;
  background: transparent;
  font-size: 25px;
  width: 214px;
  height: 87px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 60px;
  }

  .location-btn,
  .burger-btn {
    width: 160px;
    height: 60px;
    font-size: 20px;
  }

  .hero-description {
    font-size: 16px;
  }

  .plan-btn,
  .schedule-btn {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
