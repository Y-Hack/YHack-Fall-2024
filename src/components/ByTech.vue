<script setup></script>

<template>
  <footer id="YHACK" class="TECH">
    <!-- If you are a Yale student reading this, -->
    <!--  consider joining the YHack Tech team!  -->
    <div class="madewithloveby flx">
      <h1 class="yhacktech">Made with 💜 by the YHack team!</h1>
      <h2 class="copyright">© 2024 YHack. All Rights Reserved.</h2>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 2rem 0.25rem;
}
@media only screen and (max-width: 767px) {
  footer {
    padding: 0 1rem;
  }
}
.madewithloveby {
  flex-direction: column;
}
.copyright {
  font-weight: 400;
}
</style>
