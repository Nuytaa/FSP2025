<!-- Modal.vue -->
<template>
  <div class="modal-overlay" v-if="visible" @click.self="hide">
    <div class="modal-content">
      <div class="modal-header">
        <button class="back-btn" @click="hide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#177FD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#177FD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="airplane-icon">
          <img src="/plane2.png" width="54" height="54" style="margin-left: -310px;">
        </div>
      </div>
      
      <div class="modal-body">
        <p class="login-prompt">Войдите в аккаунт</p>
        <p class="login-instruction">Введите логин и пароль в форме ниже</p>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="text_login" for="username">Имя</label>
            <input type="text" id="username" placeholder="Введите имя пользователя" class="custom-input">
          </div>
          
          <div class="form-group password-group">
            <div class="password-label-row">
              <label class="text_login" for="password">Пароль*</label>
            </div>
            <input type="password" id="password" placeholder="Введите пароль" class="custom-input">
          </div>
          <a href="#" class="forgot-password">Восстановить пароль</a>
          
          <button type="submit" class="login-btn">Войти</button>

          <div class="register-prompt">
            Нет аккаунта? <a href="#">Зарегистрироваться</a>
          </div>

          <div class="social-login">
            <p>Войти с помощью</p>
            <div class="social-buttons">
              <button class="social-btn yandex">
                <img src="/public/yandex.png" alt="Яндекс" class="social-icon">
                Яндекс ID
              </button>
              <button class="social-btn vk">
                <img src="/public/vk.png" alt="ВКонтакте" class="social-icon">
              </button>
              <button class="social-btn google">
                <img src="/public//google.png" alt="Google" class="social-icon">
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => {
  visible.value = true
  document.body.style.overflow = 'hidden'
}

const hide = () => {
  visible.value = false
  document.body.style.overflow = 'auto'
}

const handleSubmit = () => {
  // Логика входа
  hide()
}

defineExpose({
  show,
  hide
})
</script>

<style scoped>
.text_login {
  margin-left: 40px;
  text-align: left;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 454px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.back-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: -8px;
}

.airplane-icon {
  width: 54px;
  height: 54px;
}

.login-prompt {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 8px 0;
  color: #000;
}

.login-instruction {
  color: black;
  margin: 0 0 32px 0;
  font-size: 16px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #000;
  font-size: 16px;
}

.password-group {
  margin-bottom: 16px;
}

.password-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.forgot-password {
  color: #177FD1;
  text-decoration: none;
  font-size: 14px;
  display: block;
  text-align: left;
  margin-top: 10px;
  margin-left: 50px;
}

.custom-input {
  width: 272px;
  height: 44px;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 16px;
  box-sizing: border-box;
  margin-left: -20px;
}

.login-btn {
  width: 325px;
  height: 44px;
  background-color: #177FD1;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin: 24px 0;
}

.register-prompt {
  text-align: center;
  margin-bottom: 32px;
  color: #666;
  font-size: 16px;
}

.register-prompt a {
  color: #177FD1;
  text-decoration: none;
}

.social-login {
  text-align: center;
  margin-bottom: 32px;
}

.social-login p {
  margin-bottom: 16px;
  color: #666;
  font-size: 16px;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

.social-btn.yandex {
  width: 188px;
  height: 48px;
  background: white;
  color: black;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.social-btn.vk {
  width: 48px;
  height: 48px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 80px;
}

.social-btn.google {
  width: 48px;
  height: 48px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 80px;
}

.social-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>