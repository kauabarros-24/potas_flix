<script>
import { ref, onMounted } from "vue";

export default {
  name: "Header",
  setup() {
    const isHovered = ref(false);

    // Referência ao logo
    const logoRef = ref(null);

    const handleMouseEnter = () => {
      isHovered.value = true;
    };

    const handleMouseLeave = () => {
      isHovered.value = false;
    };

    // Manipulação do espaçamento ao montar o componente
    onMounted(() => {
      if (logoRef.value) {
        logoRef.value.style.letterSpacing = "0.1em"; // Ajuste o valor para personalizar
      }
    });

    return { isHovered, handleMouseEnter, handleMouseLeave, logoRef };
  },
};
</script>

<template>
  <header>
    <!-- Associando a ref ao logo -->
    <div class="logo" ref="logoRef">PotasFlix</div>
    <div class="left-buttons">
      <div
        class="search-container"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <input
          type="text"
          placeholder="Search"
          class="search-input"
          :class="{ expanded: isHovered }"
        />
        <button class="lupa" :class="{ hidden: isHovered }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
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

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem; /* Ajustado para espaçamento menor */
  background-color: #141414;
  color: #fff;
  height: 80px; /* Reduzido para combinar com o estilo da Netflix */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.logo {
  font-size: 2.8rem; /* Ajustado para um tamanho mais suave */
  font-weight: bold;
  color: #e50914; /* Cor vermelha da Netflix */
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.3em;
}

.left-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-input {
  height: 35px;
  width: 0;
  padding: 0 12px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  opacity: 0;
  background-color: #333;
  color: white;
}

.search-input.expanded {
  width: 250px;
  opacity: 1;
}

.lupa {
  background-color: #333;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: absolute;
  right: 10px; /* Posiciona a lupa dentro do campo de input */
  z-index: 1;
}

.lupa.hidden {
  opacity: 0;
}

.lupa svg {
  fill: white;
  width: 24px;
  height: 24px;
}

.buttons-container {
  display: flex;
  gap: 1.5rem;
}

.login-button,
.profile-button {
  background-color: #e50914; /* Cor vermelha da Netflix */
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.login-button:hover,
.profile-button:hover {
  background-color: #f40612; /* Cor de hover mais escura da Netflix */
  transform: scale(1.1);
}
</style>
