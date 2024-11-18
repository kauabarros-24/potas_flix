<template>
  <header>
    <!-- Associando a ref ao logo -->
    <div class="logo" ref="logoRef">PotasFlix</div>
    <div class="header-buttons">
      <!-- Botões de navegação (Séries, Filmes, Anúncios) -->
      <div class="nav-buttons">
        <button class="nav-button">Séries</button>
        <button class="nav-button">Filmes</button>
        <button class="nav-button">Anúncios</button>
      </div>
      <div class="search-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <input type="text" placeholder="Search" class="search-input" :class="{ expanded: isHovered }" />
        <button class="lupa" :class="{ hidden: isHovered }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div class="buttons-container">
        <button class="login-button">Login</button>
        <button class="profile-button">Profile</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,  // Variável para controlar o estado do hover
    };
  },
  methods: {
    // Função que ativa quando o mouse entra no container de busca
    handleMouseEnter() {
      this.isHovered = true;
    },
    // Função que ativa quando o mouse sai do container de busca
    handleMouseLeave() {
      this.isHovered = false;
    },
  },
};
</script>

<style>
/* Estilo geral do body */
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #141414;
  color: #fff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3rem;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.logo {
  font-size: 3.2rem;
  font-weight: bold;
  color: #e50914;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

header:hover .logo {
  transform: scale(1.05);
}

.header-buttons {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-buttons {
  display: flex;
  gap: 2rem;
}

.nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-button:hover {
  color: #e50914;
  transform: scale(1.05);
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-input {
  height: 40px;
  width: 0;
  padding: 0 15px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: width 0.5s ease, opacity 0.5s ease;
  opacity: 0;
  background-color: #333;
  color: white;
}

.search-input.expanded {
  width: 280px;
  opacity: 1;
}

.lupa {
  background-color: #333;
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  z-index: 1;
  transition: transform 0.3s ease;
}

.lupa.hidden {
  opacity: 0;
}

.lupa svg {
  fill: white;
  width: 20px;
  height: 20px;
}

.buttons-container {
  display: flex;
  gap: 1.8rem;
}

.login-button,
.profile-button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.login-button:hover,
.profile-button:hover {
  background-color: #f40612;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  header {
    padding: 0.8rem 2rem;
  }

  .logo {
    font-size: 2.5rem;
  }

  .nav-buttons {
    display: none;
  }

  .buttons-container {
    gap: 1.2rem;
  }
}
</style>
