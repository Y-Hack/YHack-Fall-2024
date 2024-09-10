<script setup>
import { ref } from 'vue'

const heart = "<3";
</script>

<template>
  <footer class="-credits-yhack">
    <div class="-footer-wrap">
      <h3 class="-love-x -txsh">Made with {{ heart }} by the YHack Team!</h3>
      <p class="-cr-x -txsh">© 2024 YHack. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style>
.-credits-yhack {
  /* min-height: 25vh; */
  padding: 1.75rem;
}
.-footer-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.-love-x {
  font-size: 1.375rem;
}
.-cr-x {
  font-size: 1.25rem;
}

@media only screen and (max-width: 567px) {
  .-credits-yhack {
    padding: 2rem 1rem;
  }
  .-love-x,
  .-cr-x {
    text-align: center;
  }
}
</style>