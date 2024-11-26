<template>
  <header class="clean-header">
    <div class="logo">PotasFlix </div>
    <nav class="navigation">
      <button 
        v-for="tab in tabs" 
        :key="tab" 
        class="nav-item" 
        :class="{ active: activeTab === tab }" 
        @click="setActive(tab)">
        {{ tab }}
      </button>
    </nav>
    <div class="profile">
      <div class="search-container" 
           @mouseenter="handleHover" 
           @mouseleave="handleMouseLeave">
        <!-- Campo de pesquisa -->
        <input 
          ref="searchInput"
          v-model="searchQuery" 
          type="text" 
          class="search-box" 
          placeholder="Pesquisar..."
          :class="{ expanded: isSearchActive }"
        />
        <!-- Lupinha de pesquisa à direita -->
        <i class="icon bi bi-search" @click="focusSearch">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </i>
      </div>
      <div class="user">
        <button class="signup">Signup</button>
        <button class="login">Login</button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tabs = ["Home", "Series", "Originals"];
    const activeTab = ref("Home");
    const searchQuery = ref("");
    const isSearchActive = ref(false);
    const searchInput = ref(null);

    const setActive = (tab) => {
      activeTab.value = tab;
    };

    const handleHover = () => {
      isSearchActive.value = true;
    };

    const handleMouseLeave = () => {
      if (!searchQuery.value) {
        isSearchActive.value = false;
      }
    };

    const focusSearch = () => {
      searchInput.value.focus();
    };

    return {
      tabs,
      activeTab,
      searchQuery,
      isSearchActive,
      searchInput,
      setActive,
      handleHover,
      handleMouseLeave,
      focusSearch,
    };
  },
};
</script>

<style scoped>
/* Header Container */
.clean-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: #333;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.logo {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

/* Navigation */
.navigation {
  display: flex;
  gap: 20px;
}

.nav-item {
  background: none;
  font-size: 1rem;
  border: none;
  color: #555;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;
  padding: 8px 15px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover {
  font-size: 20px;
  transition: 0.2s;
  

}

/* Profile Section */
.profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Search Container */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; /* Faz a lupa aparecer à direita */
}

.icon {
  font-size: 2rem; /* Aumentando a lupa */
  color: black; /* Tornando a lupa preta */
  cursor: pointer;
  transition: color 0.3s;
}

.icon:hover {
  color: #333;
}

.search-box {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  width: 0px;
  padding: 0;
  opacity: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 0.9rem;
  background: white;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.search-box.expanded {
  width: 200px;
  padding: 8px 10px;
  opacity: 1;
  border: 1px solid #ddd;
}

.search-box::placeholder {
  color: #aaa;
  font-style: italic;
}

/* Buttons Style */
.signup,
.login {
  width: 90px;
  padding: 10px 15px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.signup {
  background-color: white;
  color: black;
  border: 2px solid black;
  margin-right: 10px;
}

.signup:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.login {
  background-color: black; 
  color: white;
  border: 2px solid black;
}

.login:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
.logo:hover {
  transform: scale(1.2);
  transition: 0.4s;

}

.nav-item.active {
  border-bottom: 4px solid black; /* Linha embaixo do item ativo */
  color: black; /* Destaque no texto, se necessário */
}

</style>
