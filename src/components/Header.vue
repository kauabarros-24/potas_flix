<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

defineProps({
  title: {
    type: String,
    default: "PotasFlix",
  },
  menuLinks: {
    type: Array,
    default: () => [
      { name: "Originals", path: "/originals" },
      { name: "Series", path: "/series" },
      { name: "Movies", path: "/movies" },
      { name: "Documentaries", path: "/documentaries" },
      { name: "Anime", path: "/anime" },
      { name: "Kids", path: "/kids" },
    ],
  },
  accountLabel: {
    type: String,
    default: "Minha Conta",
  },
});
</script>

<template>
  <div>
    <header>
      <div class="logo">
        <h1>{{ title }}</h1>
      </div>
      <div class="menu-hamburguer" @click="toggleMenu" aria-label="Abrir menu">
        <div :class="{ bar: true, change: isMenuOpen }"></div>
        <div :class="{ bar: true, change: isMenuOpen }"></div>
        <div :class="{ bar: true, change: isMenuOpen }"></div>
      </div>
      <div class="menu-overlay" :class="{ active: isMenuOpen }">
        <div class="menu-content">
          <button class="close-menu" @click="toggleMenu" aria-label="Fechar menu">X</button>
          <div class="menu-search">
            <input
              v-show="isMenuOpen"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <i class="bi bi-search"></i>
          </div>
          <hr />
          <div class="menu-links">
            <router-link
              v-for="(link, index) in menuLinks"
              :key="index"
              :to="link.path"
              class="menu-link"
            >
              {{ link.name }}
            </router-link>
          </div>
          <hr />
          <div class="menu-account">
            <i class="bi bi-person-circle"></i>
            <p>{{ accountLabel }}</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;
}

.logo h1 {
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
}
.logo h1:hover {
  font-size: 250%;
  transition: 0.1s;
  border: 1px solid black
}

.menu-hamburguer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  margin-right: 10px;
}

.bar {
  height: 5px;
  width: 100%;
  background-color: black;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.change {
  transform: rotate(45deg);
}

.change:nth-child(2) {
  opacity: 0;
}

.change:nth-child(3) {
  transform: rotate(-45deg);
}

.menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 18%;
  height: 100%;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
}

.menu-overlay.active {
  transform: translateX(0);
  opacity: 1;
}

.menu-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between; /* Ajusta para empurrar Minha Conta para baixo */
}

.menu-account {
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: auto; /* Garante que a seção fique no final */
  align-items: center;
}

.menu-account p {
  font-size: 20px;
}
.menu-account:hover {
  font-size: 120%;
  transition: 0.1s;
}

.menu-search {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
}

.menu-search input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: 1px black solid;
  transition: opacity 0.3s ease, transform 0.3s ease;
  width: 30%;
  height: 70%;
}

.menu-search input.fade-out {
  opacity: 0;
  transform: translateX(-50px);
}

.bi-search {
  margin-left: 10px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.bi-search:hover {
  transform: rotate(-50deg);
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.menu-link {
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
}

.menu-link:hover {
  font-style: italic;
  color: black;
  transition: 1s;
  font-weight: none;

}

.close-menu {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 2px solid black;
  z-index: 999;
  background: transparent;
  border: none;
  font-size: 20px;
  color: black;
}

.bi-person-circle {
  font-size: 20px;

}

@media (max-width: 768px) {
  .menu-overlay {
    width: 50%;
  }
}
</style>
