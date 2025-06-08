
<template>
  <div class="container-fluid p-0" style="background-color: #DCDCDC; width: 1920px; height: 2607px;">
    <!-- Main Container with padding -->
    <div class="inner-container" style="width: 1856px; height: 1032px; margin: 32px; padding: 32px; border-radius: 40px;">
      
      <!-- Top Bar with Logo and Profile Button -->
      <div class="d-flex justify-content-between w-100">
        <!-- Logo Block -->
        <div class="logo" style="width: 196px; height: 82px; border-radius: 40px; font-size: 25px; display: flex; justify-content: center; align-items: center; background-color: #ffffff; color: #007bff; font-weight: 700;">
          ПолетИИм
        </div>
        <!-- Profile Block -->
        <div class="dropdown">
          <button class="btn btn-light d-flex align-items-center" style="width: 338px; height: 82px; border-radius: 40px;">
            <img src="/public/profile.jpg" alt="Profile" class="rounded-circle" style="width: 40px; height: 40px;">
            <span class="ms-2">Бочкарева Алина</span>
            <i class="bi bi-chevron-down ms-3"></i>
          </button>
          <ul class="dropdown-menu" style="width: 338px; border-radius: 40px;">
            <li><a class="dropdown-item" href="#">Профиль</a></li>
            <li><a class="dropdown-item" href="#">Выйти</a></li>
          </ul>
        </div>
      </div>

      <!-- Chat Block (1792px x 448px) with 2 messages -->
      <div class="d-flex justify-content-center p-3" style="width: 1792px; height: 448px; border-radius: 40px; background-color: white; margin-bottom: 32px; margin-top: 32px;">
        <div class="w-100" style="margin-top: 10%;">
          <div class="p-3 mb-3" style="background-color: #DCDCDC; width: 503px; height: 106px; border-radius: 40px; font-size: 22px; display: flex; justify-content: center; align-items: center; font-weight: 600; text-align: center;">
            Здравствуй, я помогу тебе подобрать оптимальный план тура, начнем?
          </div>
          <div style="float: right;">
            <div class="p-3 mb-3" style="background-color: #B5DAF6; width: 503px; height: 77px; border-radius: 40px; font-size: 20px; display: flex; justify-content: center; align-items:center; font-weight: 600; text-align: center;">
            Здравствуй, хочу поехать в Анапу на 5 дней
          </div>
          </div>
        </div>
      </div>

      <!-- Invisible Container (1471px x 365px) with 180px padding -->
      <div class="d-flex justify-content-center" style="padding-left: 180px; padding-right: 180px;">
        <div style="width: 1471px; height: 365px; background-color: #DCDCDC; border-radius: 40px;">
          <!-- Input Fields Block -->
          <div class="d-flex flex-wrap justify-content-between p-3" style="width: 1471px; border-radius: 40px;">
            <div class="mb-2" style="width: 301px;">
              <label for="transport" class="form-label">Способ передвижения</label>
              <select id="transport" class="form-select" style="height: 81px;">
                <option value="Авиа">Авиа</option>
                <option value="Железнодорожный">Железнодорожный</option>
                <option value="Автомобиль">Автомобиль</option>
              </select>
            </div>
            <div class="mb-2" style="width: 438px;">
              <label for="date" class="form-label">Дата поездки</label>
              <input type="date" id="date" class="form-control" style="height: 80px;">
            </div>
            <div class="mb-2" style="width: 301px;">
              <label for="class" class="form-label">Класс</label>
              <select id="class" class="form-select" style="height: 81px;">
                <option value="Эконом">Эконом</option>
                <option value="Премиум">Премиум</option>
                <option value="Бизнес">Бизнес</option>
              </select>
            </div>
            <div class="mb-2" style="width: 301px;">


<label for="budget" class="form-label">Бюджет</label>
              <div class="d-flex">
                <input type="number" id="budget-from" class="form-control" placeholder="От" style="height: 81px;">
                <div style="width: 1px; background-color: blue;"></div>
                <input type="number" id="budget-to" class="form-control" placeholder="До" style="height: 81px;">
              </div>
            </div>
          </div>

          <!-- Destination & Location Inputs -->
          <div class="d-flex mb-3" style="padding: 32px;">
            <div class="mb-2" style="width: 701px;">
              <label for="destination" class="form-label">Куда?</label>
              <input type="text" id="destination" class="form-control" placeholder="Куда вы хотите поехать?" style="height: 80px;">
            </div>
            <div class="mb-2" style="width: 736px;">
              <label for="location" class="form-label">Откуда</label>
              <input type="text" id="location" class="form-control" placeholder="Введите ваше местоположение" style="height: 80px;">
            </div>
          </div>

          <!-- Message Section -->
          <div class="d-flex mb-3" style="padding: 32px;">
            <input type="text" class="form-control" placeholder="Введите сообщение..." style="width: 1222px; height: 81px;">
            <button class="btn btn-primary ms-3" style="height: 81px;">Создать план</button>
          </div>
        </div>
      </div>
    </div>

       <div class="d-flex justify-content-between" style="margin-top: 132px; padding: 32px;">
      <!-- "План для вас" Section -->
      <div class="plan-section" style="width: 1164px; height: 656px; background-color: white; border-radius: 40px; padding: 32px; display: flex; flex-direction: column;">
        <div class="d-flex align-items-center">
          <div class="number-circle" style="width: 48px; height: 48px; background-color: #007bff; color: white; display: flex; justify-content: center; align-items: center; border-radius: 50%;">1</div>
          <h2 class="ms-3" style="font-size: 64px; font-weight: 700;">План для вас</h2>
        </div>
        <div class="plan-list" style="max-height: 301px; overflow-y: auto; margin-top: 16px;">
          <p><strong>Прибытие в Анапу и трансфер до отеля</strong><br><span style="color: black;">Аэропорт:</span> Анапа, ул. Азадромная, 1</p>
          <p><strong>Отдых на Центральном пляже</strong><br><span style="color: black;">Пляж:</span> Центральный пляж, ул. Горького, Анапа</p>
          <p><strong>Ужин в ресторане 'Рыбацкие истории'</strong><br><span style="color: black;">Ресторан:</span> ул. Набережная, 1, Анапа</p>
        </div>
        <!-- <div class="d-flex justify-content-between">
          <button class="btn btn-light" style="width: 48px; height: 48px; border-radius: 50%;">←</button>
          <button class="btn btn-light" style="width: 48px; height: 48px; border-radius: 50%;">→</button>
        </div> -->
      </div>

      <!-- Chat Section -->
      <div class="chat-section" style="width: 690px; height: 656px; background-color: white; border-radius: 40px; padding: 32px;">
        <div class="chat-box" style="height: 501px; overflow-y: auto;">
          <!-- First Message -->
          <div class="chat-message" style="background-color: #DCDCDC; width: 503px; height: 106px; border-radius: 40px; font-size: 20px; font-weight: 600; padding: 16px; margin-bottom: 16px;">
            Вам понравился мой план? Возможно вы бы хотели что-то улучшить?
          </div>
          <!-- Second Message -->
          <div class="chat-message" style="background-color: #B5DAF6; width: 503px; height: 77px; border-radius: 40px; font-size: 20px; font-weight: 600; padding: 16px;">
            Отдых на пляже заменить на другое мероприятие
          </div>
        </div>
        <!-- Input and Send Button -->
        <div class="d-flex align-items-center mt-3">
          <input type="text" class="form-control" placeholder="Введите сообщение..." style="width: 637px; height: 81px; border-radius: 40px;">
          <button class="btn btn-primary ms-3" style="width: 48px; height: 48px; border-radius: 40px;">→</button>
        </div>
      </div>
    </div>
     <FooterSection />
</div>
</template>

<script setup>
import { ref } from 'vue';

// For downloading PDF or creating any dynamic logic
const createPlan = () => {
  // Logic for PDF generation or QR code creation
}

// Logic for scrolling and navigation (if required)
const handleScroll = (direction) => {
  // Handle scroll logic for "План для вас"
}
</script>

<style scoped>
.container-fluid {
  max-width: 100%;
}


.btn-light {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-menu {
  background-color: white;
  border-radius: 40px;
}

.form-select, .form-control {
  border-radius: 40px;
  border-color: #177FD1;
  color: #177FD1;
  padding-left: 30px;
}

.dropdown-toggle::after {
  display: none;
}

.ms-2 {
  margin-left: 8px;
}

.ms-3 {
  margin-left: 16px;
  color:#177FD1;
}

.btn-primary {
  width: 217px;
  height: 21px;
  background-color: #007bff;
  border-radius: 40px;
  font-size: 20px;
}

.form-label {
    font-size: 20px;
    font-weight: 800;
    color: #177FD1;
    margin-left: 20px;
}

.container-fluid {
  max-width: 100%;
}

.plan-section {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  color:#177FD1;
  font-weight: 400;
  font-size: 32px;
}

.chat-section {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.number-circle {
  font-size: 24px;
  font-weight: 500;
}

.chat-message {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-light {
  background-color: #f8f9fa;
  border: none;
  font-size: 20px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

form-control {
  font-size: 18px;
}
</style>