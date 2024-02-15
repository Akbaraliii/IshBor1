<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">Ish bor</h1>
      <router-link to="/" class="navbar-brand"> Home </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/jobs" class="nav-link">Jobs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script></script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the navbar is above other content */
  padding: 10px 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-brand,
.navbar-nav .nav-link {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-right: 10px;
}
.logo {
  padding-right: 500px;
  color: blue;
}
</style>
