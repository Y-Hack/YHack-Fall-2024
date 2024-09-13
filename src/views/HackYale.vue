<script setup>
import { ref } from 'vue'
import NavBar from '../components/misc/NavBar.vue'
import SplashPage from '../components/SplashPage.vue'
import AboutInfo from '../components/AboutInfo.vue'
import TrackTypes from '../components/TrackTypes.vue'
import FrequentAsks from '../components/FrequentAsks.vue'
import SponsorsDisplay from '../components/SponsorsDisplay.vue'
import ByTech from '../components/ByTech.vue'
</script>

<template>
  <NavBar />
  <main id="HACK">
    <SplashPage />
    <AboutInfo />
    <TrackTypes />
    <FrequentAsks />
    <SponsorsDisplay />
    <ByTech />
  </main>
</template>

<style scoped>
main {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
