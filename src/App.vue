<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="YALE">
    <RouterView />
  </div>
</template>

<style scoped>
div {
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('./assets/images/yhack/bg.png');
}
</style>
