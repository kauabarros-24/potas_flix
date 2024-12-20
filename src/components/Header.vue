<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "PotasFlix",
  },
  accountLabel: {
    type: String,
    default: "Account",
  },
});
</script>

<template>
  <div>
    <header>
      <div class="logo">
        <h1>{{ title }}</h1>
      </div>
      <div class="menu-account">
        <i class="bi bi-person-circle"></i>
        <p> {{ accountLabel }}</p>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;
  padding: 10px;
}

.logo h1 {
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
}

.logo h1:hover {
  transition: 0.1s;
  color: rgb(209, 209, 209);
}

.menu-account {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}

.menu-account i {
  font-size: 25px;
  cursor: pointer;
}
.menu-account p {
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-account {
    gap: 20px; /* Garante um pequeno espaço entre a logo e o ícone de perfil */
  }

  .logo h1 {
    font-size: 1.8rem;
  }
}
</style>
