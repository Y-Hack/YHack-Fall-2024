<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import SplashHack from '../components/SplashHack.vue'
import AboutDetails from '../components/AboutDetails.vue'
import FrequentlyAsked from '../components/FrequentlyAsked.vue'
import SponsorsThanks from '../components/SponsorsThanks.vue'
import CreditsEnding from '../components/CreditsEnding.vue'
import TracksTypes from '../components/TracksType.vue'
import Schedule from '../components/Schedule.vue'
</script>

<template>
  <main id="_y_" class="-container-x -bg">
    <NavBar />
    <SplashHack />
    <AboutDetails />
    <TracksTypes />
    <FrequentlyAsked />
    <!-- <Schedule /> -->
    <SponsorsThanks />
    <CreditsEnding />
  </main>
</template>

<style scoped>
.-container-x {
  /* height: 9070px; */
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/yhackbg.png');
  padding: 1rem;
}
</style>
