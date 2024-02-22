<template>
  <div class="home">
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">Fayz Biznes</h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Asosiy</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/jobs" class="nav-link">Mahsulotlar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/famous" class="nav-link">Mashhurlari</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Aloqa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Kompaniya Haqida</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <FooterView></FooterView>
  <router-view></router-view>
</template>

<script setup>
import FooterView from './views/FooterView.vue'
</script>

<style scoped>
.home {
  /* Ensure the content below the navbar is pushed down */
  padding-top: 60px;
}

.navbar {
  background-color: #6c5b7b; /* Purple color */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  z-index: 1000; /* Ensure the navbar is above other content */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px;
}

.nav-item {
  margin-right: 20px; /* Increase the spacing between items */
}

.logo {
  color: #fff; /* White color for the logo */
  font-size: 24px;
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the logo */
  padding-left: 20px;
}

.nav-link {
  color: darkorange; /* White color for nav links */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease; /* Add smooth color transition */
}

.nav-link:hover {
  color: #d9b08c; /* Light brown color on hover */
}
</style>
