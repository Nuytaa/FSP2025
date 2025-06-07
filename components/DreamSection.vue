<template>
  <div class="d-flex justify-content-center my-5">
    <div
      class="d-flex flex-wrap rounded-4 overflow-hidden"
      style="width: 1856px; height: 692px; background-color: #ffffff; border-radius: 40px;"
    >
      <!-- Левая часть: изображение -->
      <div style="width: 748px; height: 692px;">
        <img
          src="/public/dream.jpg"
          alt="девушка у здания"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>

      <!-- Правая часть: текст + кнопка -->
      <div
        class="d-flex flex-column justify-content-center align-items-center p-5;"
        style="width: 1108px; height: 692px;"
      >
        <h2 class="fw-bold mb-3" style="font-size: 52px; color:#177FD1;">
          Воплотите свои мечты <br />
          уже сегодня
        </h2>
        <p class="text-muted mb-4" style="font-size: 32px; color:#177FD1; padding-left: 130px;">
          Запланируйте своё путешествие вместе с нашим<br />
          помощником быстро и одним кликом.
        </p>
        <button
          class="btn text-white"
          style="background-color: #177FD1; font-size: 32px; width: 470px; height: 109px; border-radius: 40px; margin-left: -130px; font-weight: 700;"
        >
          Составить план
        </button>
      </div>
    </div>
  </div>
</template>