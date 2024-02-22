<template>
  <footer class="footer">
    <div class="container">
      <span class="above">
        <p>Fayz Biznes</p>
        <p>+998 (00) 000 00 00</p>
      </span>
      <span class="below">
        <p>Namangan Shahar, 8-Mart ko'chasi, Uy-1</p>
        <p>© Fayz Biznes 2024. Barcha huquqlari himoyalangan</p>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
}

.container {
  max-width: 1200px;
  display: flex;
  justify-content: space-between; /* Align items to each end of the container */
}

p {
  margin: 0;
}

.footer p {
  font-size: 18px;
  line-height: 1.5;
}

.above p {
  color: #fff;
  font-size: 30px;
}

.below p {
  color: #fff;
  font-size: 20px;
}
</style>
