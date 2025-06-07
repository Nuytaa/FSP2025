<template>
  <div class="outer-container d-flex justify-content-center align-items-center">
    <div class="inner-container">

      <!-- Первая линия -->
      <div class="row gx-4 gy-4">
        <!-- Видео 1 -->
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/1video.mp4" type="video/mp4" />
          </video>
        </div>

        <!-- Текстовый блок -->
        <div class="col text-wrapper">
          <h2>Путешествие — просто</h2>
          <p>
            В любую точку мира и России всего<br />
            за пару кликов и запросов в нашем чате
          </p>
        </div>

        <!-- Видео 2 -->
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/2video.mp4" type="video/mp4" />
          </video>
        </div>

        <!-- Видео 3 -->
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/3video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <!-- Вторая линия -->
      <div class="row gx-4 gy-4 mt-4">
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/1video.mp4" type="video/mp4" />
          </video>
        </div>
         <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/2video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/3video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="col video-wrapper">
          <video class="video" autoplay muted loop playsinline>
            <source src="/public/4video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.outer-container {
  width: 1856px;
  min-height: 900px; /* автоувеличение если нужно */
  height: auto;
  background-color: transparent;
  padding: 0;
  margin: 0 auto;
  overflow: visible; /* убрать скрытие */
}

.inner-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px; /* Отступ между первой и второй линией */
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* не переносить блоки внутри строки */
}

.col {
  flex: 0 0 auto;
  width: 440px;
  height: 600px;
}

.video-wrapper {
  border-radius: 40px;
  overflow: hidden;
  background-color: transparent; /* убираем черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  display: block; /* убираем inline поведение */
  width: 100%;
  height: 100%;
  object-fit: cover; /* важно */
  border-radius: 40px;
  margin: 0;
  padding: 0;
}

.text-wrapper {
  border-radius: 40px;
  background-color: #f0f0f0;
  height: 600px;
  width: 440px;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-wrapper h2 {
  font-size: 28px;
  color: #007bff;
  margin-bottom: 16px;
}

.text-wrapper p {
  font-size: 16px;
  color: #333;
}

/* Адаптивность */
@media (max-width: 1856px) {
  .outer-container {
    width: 100%;
    padding: 16px;
  }

  .row {
    flex-wrap: wrap;
    justify-content: center;
  }

  .col {
    margin-bottom: 16px;
  }
}
</style>