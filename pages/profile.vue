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

      
    <div class="trip-grid">
      <div
        class="trip-card"
        v-for="trip in trips"
        :key="trip.title"
      >
        <h5>{{ trip.title }}</h5>
        <p class="text-muted">{{ trip.subtitle }}</p>
        <img
          :src="trip.image"
          alt="Фото"
          class="trip-image"
        />
        <div
          class="trip-status"
          :style="{ backgroundColor: trip.statusColor }"
        >
          {{ trip.statusText }}
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

// ✅ Правильное определение массива trips
const trips = [
  {
    title: 'Моя поездка в Анапу',
    subtitle: 'Анапа 2025 год',
    image: '/анапа.jpg',
    statusText: 'Новое',
    statusColor: '#A0A0A0'
  },
  {
    title: 'Поездка в Сочи',
    subtitle: 'Сочи 2025 год',
    image: '/сочи.png',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Поездка по Ярославлю',
    subtitle: 'Золотое кольцо',
    image: '/ярославль.png',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Москва (Большой Театр)',
    subtitle: 'Премьера Большой театр 2024',
    image: '/москва.png',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Тула 2024',
    subtitle: 'Тула 2024',
    image: '/тула.jpg',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Казань (Kazan)',
    subtitle: 'Казань 2024',
    image: '/казань.jpg',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Москва',
    subtitle: 'Концерт Wildways',
    image: '/москва2.jpg',
    statusText: 'Успех',
    statusColor: '#28a745'
  },
  {
    title: 'Поездка в Крым',
    subtitle: 'Крым 2023 год',
    image: '/крым.jpg',
    statusText: 'Отменено',
    statusColor: '#dc3545'
  }
];
</script>

<style scoped>
body {
  background-color: #f2f5f8;
}
.trip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  padding: 16px;
}

.trip-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 24px;
  text-align: center;
  height: 100%;
}

.trip-image {
  width: 100%;
  height: 187px;
  object-fit: cover;
  border-radius: 40px;
  margin: 16px 0;
}

.trip-status {
  width: 89px;
  height: 44px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>