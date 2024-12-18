<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div>
    <header>
      <div class="logo">
        <h1>PotasFlix</h1>
      </div>
      <div class="menu-hamburguer" @click="toggleMenu" aria-label="Abrir menu">
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
      </div>
      <div class="menu-overlay" :class="{'active': isMenuOpen}">
        <div class="menu-content">
          <button class="close-menu" @click="toggleMenu" aria-label="Fechar menu">X</button>
          <div class="menu-search">
            <input v-show="isMenuOpen" type="text" placeholder="Search..." aria-label="Search" />
            <i class="bi bi-cart cart-icon"></i>
          </div>
          <hr />
          <div class="menu-links">
            <router-link to="/originals" class="menu-link" id="originals">Originals</router-link>
            <router-link to="/series" class="menu-link" id="series">Series</router-link>
            <router-link to="/movies" class="menu-link" id="movies">Movies</router-link>
            <!-- Links continuam aqui -->
          </div>
          <hr>
          <div class="menu-account">
            <i class="bi bi-person-circle"></i>
            <p>Minha Conta</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
/* Header styles */
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

/* Menu overlay */
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
}

/* Menu Search */
.menu-account {
  display: flex;
  width: 100%;
  margin: 10px 0;
}

.menu-search {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.menu-search input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 5px 5px 5px;
  border: 1px black solid;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-search input.fade-out {
  opacity: 0;
  transform: translateX(-50px);
}

.cart-icon {
  margin-left: 10px;
  font-size: 24px;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.cart-icon:hover {
  transform: rotate(180deg);
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-link {
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
}

.menu-link:hover {
  color: #ff6347;
}

/* Close menu button */
.close-menu {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;
}

/* Media queries */
@media (max-width: 768px) {
  .menu-overlay {
    width: 50%;
  }
}
</style>
