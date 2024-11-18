<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <div class="logo">Logo</div>
    <div class="left-buttons">
      <button class="login-button">Login</button>
      <button class="profile-button">Profile!</button>
      <button class="lupa">Lupa</button>
    </div>
    

  </header>
</template>

<style>
body {
  margin: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #141414; 
  color: #fff;
  height: 70px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 1000; 
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
}

.left-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  gap: 1rem; 
}

.login-button {
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #e6e6e6;
}

.profile-button {
    background-color: #fff;
  color: #000;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-button:hover {
  transform: scale(1.1);
}
.lupa {
    border: #000;
}
</style>
