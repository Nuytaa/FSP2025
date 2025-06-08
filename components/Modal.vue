<template>
  <!-- Модальное окно входа -->
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

        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label class="text_login" for="username">Имя</label>
            <input type="text" id="username" placeholder="Введите имя пользователя" class="custom-input" v-model="username">
          </div>
          
          <div class="form-group password-group">
            <div class="password-label-row">
              <label class="text_login" for="password">Пароль*</label>
            </div>
            <input type="password" id="password" placeholder="Введите пароль" class="custom-input" v-model="password">
          </div>
          <a href="#" class="forgot-password" @click.prevent="showPasswordRecoveryModal">Восстановить пароль</a>
          
          <button type="submit" class="login-btn">Войти</button>

          <div class="register-prompt">
            Нет аккаунта? <a href="#" @click.prevent="showRegisterModal">Зарегистрироваться</a>
          </div>

          <div class="social-login">
            <p>Войти с помощью</p>
            <div class="social-buttons">
              <button class="social-btn yandex">
                <img src="/yandex.png" alt="Яндекс" class="social-icon">
                Яндекс ID
              </button>
              <button class="social-btn vk">
                <img src="/vk.png" alt="ВКонтакте" class="social-icon">
              </button>
              <button class="social-btn google">
                <img src="/google.png" alt="Google" class="social-icon">
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Модальное окно регистрации -->
  <div class="modal-overlay" v-if="registerVisible" @click.self="hideRegisterModal">
    <div class="modal-content">
      <div class="modal-header">
        <button class="back-btn" @click="hideRegisterModal">
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
        <p class="login-prompt">Регистрация</p>
        <p class="login-instruction">Введите данные по форме ниже</p>

        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label class="text_login" for="reg-username">Имя пользователя*</label>
            <input type="text" id="reg-username" placeholder="Введите имя пользователя" class="custom-input" v-model="registerData.username" required>
          </div>
          
          <div class="form-group">
            <label class="text_login" for="reg-password">Пароль*</label>
            <input type="password" id="reg-password" placeholder="Введите пароль" class="custom-input" v-model="registerData.password" required>
          </div>
          
          <div class="form-group">
            <label class="text_login" for="reg-password-confirm">Повторите пароль*</label>
            <input type="password" id="reg-password-confirm" placeholder="Введите пароль" class="custom-input" v-model="registerData.passwordConfirm" required>
          </div>
          
          <div class="form-group">
            <label class="text_login" for="reg-email">E-mail*</label>
            <input type="email" id="reg-email" placeholder="Введите E-mail" class="custom-input" v-model="registerData.email" required>
          </div>
          
          <p class="consent-text">
            Нажимая кнопку «Зарегистрироваться» вы даёте согласие на обработку своих персональных данных
          </p>
          
          <button type="submit" class="login-btn">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Модальное окно восстановления пароля -->
  <div class="modal-overlay" v-if="passwordRecoveryVisible" @click.self="hidePasswordRecoveryModal">
    <div class="modal-content">
      <div class="modal-header">
        <button class="back-btn" @click="hidePasswordRecoveryModal">
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
        <p class="login-prompt">Восстановить пароль</p>
        <p class="login-instruction">Введите E-mail в форме ниже</p>

        <form @submit.prevent="handlePasswordRecovery">
          <div class="form-group">
            <label class="text_login" for="recovery-email">E-mail</label>
            <input type="email" id="recovery-email" placeholder="Введите E-mail" class="custom-input" v-model="recoveryEmail" required>
          </div>
          
          <button type="submit" class="login-btn">Отправить код</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigateTo } from '#app'

const visible = ref(false)
const registerVisible = ref(false)
const passwordRecoveryVisible = ref(false)

const username = ref('')
const password = ref('')
const recoveryEmail = ref('')

const registerData = ref({
  username: '',
  password: '',
  passwordConfirm: '',
  email: ''
})

const show = () => {
  visible.value = true
  document.body.style.overflow = 'hidden'
}

const hide = () => {
  visible.value = false
  document.body.style.overflow = 'auto'
}

const showRegisterModal = () => {
  visible.value = false
  registerVisible.value = true
}

const hideRegisterModal = () => {
  registerVisible.value = false
  document.body.style.overflow = 'auto'
}

const showPasswordRecoveryModal = () => {
  visible.value = false
  passwordRecoveryVisible.value = true
}

const hidePasswordRecoveryModal = () => {
  passwordRecoveryVisible.value = false
  document.body.style.overflow = 'auto'
}

const handleLogin = () => {
  // Здесь можно добавить логику проверки данных
  hide() // Закрываем модальное окно
  navigateTo('/personal') // Переходим на страницу Personal.vue
}

const handleRegister = () => {
  // Логика регистрации
  hideRegisterModal()
}

const handlePasswordRecovery = () => {
  // Логика восстановления пароля
  hidePasswordRecoveryModal()
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
  margin-top: 20px;
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
  margin-left: -30px;
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

.consent-text {
  color: #666;
  font-size: 14px;
  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
}
</style>