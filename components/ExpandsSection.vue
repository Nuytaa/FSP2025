<template>
  <div class="container py-5 d-flex justify-content-center">
    <div class="d-flex flex-wrap flex-lg-nowrap gap-4 w-100 justify-content-center">

      <!-- Левая секция: Видео (с заглушкой) -->
      <div class="video-block bg-light overflow-hidden flex-shrink-0">
        <a href="#" class="w-100 h-100 d-block text-center text-decoration-none text-white" style="display: flex; justify-content: center; align-items: center; background-color: #dcdcdc; border-radius: 40px;">
          <video src="/public/video.mp4" controls></video>
        </a>
      </div>

      <!-- Правая секция: Преимущества -->
      <div class="advantages-block bg-white p-4 rounded-4 shadow-sm d-flex flex-column justify-content-between">
        <div style="max-width: 861px; max-height: 525px;">
          <h2 class="text-primary fw-bold mb-4" style="font-size: 48px; padding-top: 50px;">Преимущества</h2>

          <ul class="list-unstyled text-primary fs-5">
            <li style="padding-bottom: 20px; font-size: 24px;" class="d-flex align-items-start mb-3">
              <img src="/public/icon.png" alt="check" class="me-3" width="24" height="24" />
              <div>
                <strong class="podzagolovok">Оперативно и круглосуточно</strong><br />
                Чат поможет в любое время составить план под ваши интересы, не нужно ждать менеджера и службу поддержки
              </div>
            </li>
            <li style="padding-bottom: 20px; font-size: 24px;" class="d-flex align-items-start mb-3">
              <img src="/public/icon.png" alt="check" class="me-3" width="24" height="24" />
              <div>
                <strong class="podzagolovok">Многофункциональность</strong><br />
                Пользователь может вносить корректировки в режиме чата
              </div>
            </li>
            <li style="padding-bottom: 20px; font-size: 24px;" class="d-flex align-items-start mb-4">
              <img src="/public/icon.png" alt="check" class="me-3" width="24" height="24" />
              <div>
                <strong class="podzagolovok">Намеченные планы всегда под рукой</strong><br />
                Возможность генерировать готовый план в формате PDF с QR-кодом
              </div>
            </li>
          </ul>
        </div>
        
        <button class="btn btn-primary text-white fw-semibold create-plan-btn mt-3">
          Создать план
        </button>

      </div>

    </div>
  </div>
</template>

<style scoped>

.podzagolovok {
  font-weight: 400;
  font-size: 32px;
}

.video-block {
  width: 739px;
  height: 694px;
  border-radius: 40px;
  overflow: hidden; 
}

.advantages-block {
  display: flex;
  align-items: center;
  width: 1085px;
  height: 694px;
  border-radius: 40px;
  color: #177FD1;
  flex-shrink: 0;
  overflow: hidden; 
}

.create-plan-btn {
  width: 263px;
  height: 87px;
  background-color: #177FD1;
  font-size: 28px;
  border-radius: 40px;
  border: none;
  font-weight: 700;
  margin-left: -55%;
}

/* Адаптивность */
@media (max-width: 1400px) {
  .video-block,
  .advantages-block {
    width: 100% !important;
    height: auto !important;
  }

  .create-plan-btn {
    width: 100%;
    height: 70px;
    font-size: 18px;
  }
}
</style>