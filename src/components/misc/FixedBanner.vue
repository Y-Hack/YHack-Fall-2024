<script setup></script>

<template>
  <aside id="MLH">
    <img src="../../assets/images/mlh.svg" alt="mlh" />
  </aside>
</template>

<style scoped>
aside {
  z-index: 9999;
  position: fixed;
  right: 1rem;
  top: 0;
}
aside img {
  width: 5rem;
}
@media only screen and (max-width: 767px) {
	aside {
		right: 0.5rem;
	}
  aside img {
    width: 2.5rem;
  }
}
</style>
