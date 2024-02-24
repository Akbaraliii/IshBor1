<template>
  <div class="contact-info">
    <div class="seller">
      <h1>Sotuvchi: Valixon Valiyev</h1>
      <h2>Telefon: +998 (00)000 00 00</h2>
    </div>
    <div class="seller">
      <h1>Sotuvchi: Alixon Aliyev</h1>
      <h2>Telefon: +998 (00)000 00 00</h2>
    </div>
    <div class="seller">
      <h1>
        <a href="https://t.me/Nuri_1978">
          <img style="height: 50px; width: 50px" src="../assets/telegram.jpg" alt="telegram image"
        /></a>
      </h1>
      <h1>
        <a href="https://www.facebook.com/akbaraliyev.azamjon/" target="_blank"
          ><img src="../assets/images.jpg" style="height: 50px; width: 50px" alt="facebook image"
        /></a>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 20px;
  margin-bottom: 100px;
  margin-left: -50px;
}

.seller {
  background-color: #f4f4f4; /* Subtle light gray */
  margin-bottom: 10px; /* Space between each seller */
  padding: 10px; /* Add padding inside each seller */
  border-radius: 8px; /* Rounded corners for a softer look */
}

h1 {
  color: black;
  font-size: 2rem;
  margin-bottom: 5px;
}

h2 {
  color: #666;
  font-size: 2rem;
  margin-top: 0;
}
</style>
