<script setup>
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the FontAwesome icons to the library
library.add(fas);

// Team Members Data
const teamMembers = [
  { name: "Brandon Yee", position: "Co-Director", photo: new URL('../assets/images/yhack/brandon.png', import.meta.url).href, email: "yhack@yhack.org" },
  { name: "Noah Dee", position: "Co-Director", photo: new URL('../assets/images/yhack/noah.png', import.meta.url).href, email: "noah.dee@yale.edu" },
  { name: "Leslie Kim", position: "Co-Director", photo: new URL('../assets/images/yhack/leslie.png', import.meta.url).href, email: "leslie.kim@yale.edu" },
  { name: "Kenny Tung", position: "Tech Director", photo: new URL('../assets/images/yhack/kenny.png', import.meta.url).href, email: "kenny.tung@yale.edu" },
  { name: "Elizabeth Zhang", position: "Logistics Director", photo: new URL('../assets/images/yhack/elizabeth.png', import.meta.url).href, email: "elizabeth.zhang.esz6@yale.edu" },
  { name: "Grady Yu", position: "Developer", photo: new URL('../assets/images/yhack/no_photo.png', import.meta.url).href, email: "grady.yu@yale.edu" },
  { name: "Theresa Fu", position: "Logistics", photo: new URL('../assets/images/yhack/theresa.png', import.meta.url).href, email: "theresa.fu@yale.edu" },
  { name: "Andrew Liu", position: "Developer", photo: new URL('../assets/images/yhack/andrew.png', import.meta.url).href, email: "andrew.liu.al2775@yale.edu" },
  { name: "Reyansh Bahl", position: "Developer", photo: new URL('../assets/images/yhack/reyansh.png', import.meta.url).href, email: "reyansh.bahl@yale.edu" },
  { name: "Christina Xu", position: "Developer", photo: new URL('../assets/images/yhack/christina.png', import.meta.url).href, email: "christina.xu@yale.edu" },
  { name: "Henry Zheng", position: "Developer", photo: new URL('../assets/images/yhack/henry.png', import.meta.url).href, email: "henry.zheng.hpz4@yale.edu" }
];

// Using Vue Router to navigate back
const router = useRouter();

const goToSplashPage = () => {
  router.push({ path: '/' }); // Modify the path if needed
};
</script>

<template>
  <section id="team" class="team">
    <!-- FontAwesome icon button positioned in the top left corner -->
    <button @click="goToSplashPage" class="home-button">
      <font-awesome-icon :icon="['fas', 'house']" class="home-icon" />
    </button>

    <h1 class="team-title">Meet Our Team</h1>

    <div class="team-container">
      <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
        <img :src="member.photo" alt="Team Member Photo" class="member-photo" />
        <h2 class="member-name">{{ member.name }}</h2>
        <div class="position-with-icon">
          <p class="member-position">{{ member.position }}</p>
          <a :href="'mailto:' + member.email" class="icon-button gmail-button">
            <img src="../assets/images/yhack/gmail.png" alt="Gmail Icon" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Button with Icon in the Top Left Corner */
.home-button {
  position: absolute; /* Use absolute positioning */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the left */
  border: none; /* Remove default button border */
  background: transparent; /* Remove background */
  cursor: pointer; /* Show pointer on hover */
  z-index: 1000; /* Keep it on top */
  padding: 0;
}

.home-icon {
  font-size: 30px; /* Set the size of the arrow icon */
  color: #fff;
  transition: transform 0.3s ease-in-out, color 0.3s ease;
}

.home-button:hover .home-icon {
  transform: scale(1.1); /* Slight zoom-in on hover */
  color: #c85eff;
}

.team {
  position: relative; /* Make the section relative so button positions correctly */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/images/yhack/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.team-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px #8a14aa;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 0 2rem;
}

.team-member {
  background-color: rgba(48, 5, 84, 0.8);
  border: 2px solid #9743cc;
  border-radius: 15px;
  padding: 1.5rem;
  width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #9743cc;
  margin-bottom: 1rem;
  object-fit: cover;
}

.member-name {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  text-shadow: 1px 1px 3px #1c0024;
}

.position-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-position {
  font-size: 1.125rem;
  margin-right: 0.5rem;
  text-shadow: 1px 1px 2px #1c0024;
}

.icon-button {
  display: inline-block;
  width: 25px;
  height: 25px;
}

.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid #fff;
  padding: 2px;
  transition: transform 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
