<script setup></script>
<template>
    <header>
        <div class="logo">PotasFlix</div>
        <div class="Page">
            <li>Home</li>
            <li>Series</li>
            <li>Originals</li>
        </div>
        <div class="Search">
            <input type="text" placeholder="Pesquisar...">
            <p>o</p>
        </div>
        <div class="User">
            <button class="signup">Signup</button>
            <button class="login">Login</button>
        </div>
    </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  z-index: 1000; 
  height: 15%;
  font-weight: bold;
  border: 1px solid salmon;
  font-family: 'Inter', sans-serif;
}

.logo {
  margin-left: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.Page {
  display: flex;
  gap: 30px;
  list-style: none;
  justify-content: center;
  flex: 1;
}

.Page li {
  cursor: pointer;
  font-size: 1.2rem; 
  position: relative; 
  padding: 5px 0; 
  color: black;
  font-weight: bold;
  transition: font-size 0.3s ease;
}

.Page li::after {
  content: ''; 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px; 
  background-color: black; 
  transition: width 0.3s ease; 
}

.Page li:hover {
  font-size: 1.5rem; 
}

.Page li:hover::after {
  width: 100%; 
}

.Page li:not(:hover)::after {
  width: 0; 
}


.Search {
  display: flex;
  align-items: center; 
  margin-right: 20px;
  gap: 5px;
  color: black;
  
}

.Search input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.User {
  display: flex;
  gap: 12px;
  margin-right: 10px;
}

.signup,
.login {
  width: 80px;
  height: 35px;
  padding: 0; 
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
  display: flex;             
  align-items: center;         
  justify-content: center;
  border-radius: 5px;
}

.signup {
  background-color: white;
  color: black;
  border: 2px solid black;
}

.signup:hover {
  transform: scale(1.1);
  background-color: black;
  color: white;
}

.login {
  background-color: black; 
  color: white;
  border: 2px solid black;
}

.login:hover {
  transform: scale(1.1);
  background-color: white;
  color: black;
}


p {
  font-size: 0.9rem;
}
</style>
