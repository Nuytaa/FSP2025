<template>
  <section class="travel-section container-xxl px-4 my-5">
    <div class="row gx-4 align-items-center">
      <!-- Text block -->
      <div class="col-lg-5">
        <div class="bg-white border rounded-4 shadow-sm text-block">
          <h2 class="text-title">Путешествия, о которых ты<br> всегда мечтал</h2>
          <p class="text-description mt-3">
            Поделитесь своей идеей с нашим gpt чатом<br> и он разработает для вас индивидуальное путешествие,
            которое станет незабываемым
          </p>
        </div>
      </div>

      <!-- Image block -->
      <div class="col-lg-7 mt-4 mt-lg-0">
        <div class="rounded-4 overflow-hidden h-100 image-wrapper">
          <img src="/public/main.png" alt="Travel selfie" class="img-fluid object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.travel-section {
  max-width: 1856px;
  border-radius: 40px;
}

.text-title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.07em;
  color: #177FD1;
  font-family: Calibri, sans-serif;
  text-align: center;
}

.text-description {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.07em;
  font-family: Calibri, sans-serif;
  color: #177FD1;
  text-align: center;
}

.text-block {
  max-width: 739px;
  height: 348px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
}

.image-wrapper {
  height: 348px;
  border-radius: 40px;
}

.object-cover {
  object-fit: cover;
}

@media (max-width: 992px) {
  .text-title {
    font-size: 36px;
  }

  .text-description {
    font-size: 18px;
  }

  .text-block,
  .image-wrapper {
    height: auto;
  }
}
</style>
