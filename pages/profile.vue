<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Профиль</h2>
      <div class="d-flex align-items-center">
        <img src="/public/profile.jpg" class="rounded-circle me-2" width="40" height="40" />
        <span>Быковская Анна</span>
      </div>
    </div>

    <!-- User Info -->
    <div class="row mb-5">
      <!-- Левый блок -->
      <div class="col-md-6 mb-4">
        <div class="p-4 bg-white rounded-4 shadow-sm">
          <div class="d-flex align-items-center mb-3">
            <img src="/public/profile.jpg" class="rounded-circle me-3" width="64" height="64" />
            <div>
              <strong>Анна</strong><br />
              <small>youman</small>
            </div>
          </div>
          <div v-for="(item, index) in leftFields" :key="index" class="d-flex justify-content-between align-items-center border-bottom py-3" style="height: 72px;">
            <strong>{{ item.label }}</strong>
            <span class="text-muted">{{ item.value || 'Добавить' }}</span>
          </div>
          <button class="btn btn-primary mt-4">Сохранить</button>
        </div>
      </div>

      <!-- Правый блок -->
      <div class="col-md-6 mb-4">
        <div class="p-4 bg-white rounded-4 shadow-sm">
          <div v-for="(item, index) in rightFields" :key="index" class="d-flex justify-content-between align-items-center border-bottom py-3" style="height: 72px;">
            <strong>{{ item.label }}</strong>
            <span class="text-muted">{{ item.value || 'Добавить' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Places -->
    <div class="row g-4 mb-4">
      <div v-for="i in 8" :key="i" class="col-lg-3 col-md-4 col-sm-6">
        <div class="bg-white rounded-4 shadow-sm p-4" style="width: 100%; height: 434px;">
          <h5>Моя поездка в Анапу</h5>
          <p class="text-muted">Анапа 2025 год</p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center">
      <nav>
        <ul class="pagination mb-0">
          <li class="page-item disabled"><a class="page-link" href="#">‹</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">›</a></li>
        </ul>
      </nav>
      <div>
        <label for="rowsPerPage" class="form-label me-2">Строк на странице</label>
        <select id="rowsPerPage" class="form-select d-inline-block w-auto">
          <option>15</option>
          <option>30</option>
          <option>50</option>
        </select>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
const leftFields = [
  { label: 'Имя', value: 'Анна' },
  { label: 'Фамилия', value: 'Быковская' },
  { label: 'Отчество', value: '' },
  { label: 'Имя пользователя', value: 'youman' },
  { label: 'Email', value: 'yourname@gmail.com' },
  { label: 'Номер телефона', value: '' },
];

const rightFields = [
  { label: 'Пароль', value: '****' },
  { label: 'Социальные сети', value: '@bykovskayanin' },
  { label: 'Дата рождения', value: '' },
  { label: 'Город проживания', value: 'Липецк' },
  { label: 'Увлечения', value: '' },
  { label: 'О себе', value: '' },
];
</script>

<style scoped>
body {
  background-color: #f2f5f8;
}
</style>