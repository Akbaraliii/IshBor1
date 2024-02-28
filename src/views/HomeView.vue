<template>
  <div class="moto">
    <h1>Muzqaymoqlar</h1>
  </div>
  <div class="ice-cream-container">
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
    <div class="ice-cream">
      <img
        src="../assets/photo-1497034825429-c343d7c6a68f.avif"
        alt="ice-cream image"
        class="ice-cream-img"
      />
      <span class="ice-cream-name">Banana</span>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.moto {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 20px;
  width: 80%;
  height: 100px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333; /* Dark gray color for the text */
  font-size: 2rem; /* Adjust the font size as needed */
  text-align: center;
}

.ice-cream-container {
  display: contents;
  justify-content: center;
  margin-top: 20px; /* Adjust margin as 
  
  
  needed */
  margin-bottom: 120px;
  max-width: 1200px;
}

.ice-cream {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px; /* Adjust margin as needed */
}

.ice-cream-img {
  width: 250px; /* Adjust size as needed */
  height: 250px; /* Adjust size as needed */
  border-radius: 10%; /* Make the image round */
}

.ice-cream-name {
  margin-top: 10px; /* Adjust margin as needed */
  font-size: 25px;
  font-weight: bold;
}

.ice-cream-price {
  margin-top: 5px; /* Adjust margin as needed */
  font-size: 1.2rem; /* Adjust font size as needed */
  color: #666; /* Adjust color as needed */
}
</style>
