<template>
  <div>
    <!-- Header com logo e menu hamburguer -->
    <header>
      <div class="logo">
        <h1>PotasFlix</h1>
      </div>
      <!-- Botão do Menu Hambúrguer -->
      <div class="menu-hamburguer" @click="toggleMenu" aria-label="Abrir menu">
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
        <div :class="{'bar': true, 'change': isMenuOpen}"></div>
      </div>
    </header>

    <!-- Menu Deslizante -->
    <div class="menu-overlay" :class="{'active': isMenuOpen}">
      <div class="menu-content">
        <button class="close-menu" @click="toggleMenu" aria-label="Fechar menu">X</button>

        <!-- Links do Menu -->
        <div class="menu-links">
          <router-link to="/originals" class="menu-link">Originals</router-link>
          <router-link to="/series" class="menu-link">Series</router-link>
          <router-link to="/movies" class="menu-link">Movies</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  position: fixed;
  top: 5px; /* Ajustado para 5px do topo */
  left: 0;
  right: 0;
  z-index: 999;
}

.logo {
  margin-left: 10px;
  border: 1px solid peru;
  padding: 10px 10px 10px 10px;
}


.logo:hover {
  font-size: 110%; /* Aumenta o tamanho do título quando o logo for hoverado */
  transition: 0.3s;
}

/* Menu Hambúrguer */
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

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background-color: white;
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

/* Conteúdo do Menu */
.menu-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.close-menu {
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
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
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: #ff6347; /* Cor de destaque no hover */
}

/* Responsividade */
@media (max-width: 768px) {
  .menu-hamburguer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
  }

  .menu-overlay {
    width: 100%;
    padding: 30px;
  }

  .menu-links {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .menu-links a {
    font-size: 1.2rem;
  }

  .menu-overlay {
    width: 100%;
  }

  .menu-content {
    width: 100%;
  }
}
</style>
