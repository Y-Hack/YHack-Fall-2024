<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const yhackDate = new Date("2024-10-05T08:00:00");
const countdownFinished = ref(false);
const timeLeft = ref(null);
let intervalId = null;

const days = computed(() =>
  String(Math.floor(timeLeft.value / (60 * 60 * 24))).padStart(2, "0"),
);
const hours = computed(() =>
  String(Math.floor((timeLeft.value % (60 * 60 * 24)) / (60 * 60))).padStart(
    2,
    "0",
  ),
);
const minutes = computed(() =>
  String(Math.floor((timeLeft.value % (60 * 60)) / 60)).padStart(2, "0"),
);
const seconds = computed(() =>
  String(Math.floor(timeLeft.value % 60)).padStart(2, "0"),
);

const startCountdown = () => {
  const now = new Date();
  const difference = yhackDate - now;
  timeLeft.value = Math.max(difference, 0) / 1000;

  if (timeLeft.value <= 0) {
    countdownFinished.value = true;
  } else {
    intervalId = setInterval(() => {
      const now = new Date();
      const difference = yhackDate - now;
      timeLeft.value = Math.max(difference, 0) / 1000;

      if (timeLeft.value <= 0) {
        countdownFinished.value = true;
        clearInterval(intervalId);
      }
    }, 1000);
  }
};

onMounted(() => {
  startCountdown();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const socialLinks = [
  {
    name: "x-twitter",
    url: "https://twitter.com/whyhackatyhack",
    iconPrefix: "fab",
  },
  {
    name: "square-instagram",
    url: "https://www.instagram.com/whyhackatyhack/",
    iconPrefix: "fab",
  },
  {
    name: "square-facebook",
    url: "https://www.facebook.com/whyhackatyhack",
    iconPrefix: "fab",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/25075624/admin/",
    iconPrefix: "fab",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCu10FhvXTa9tp5VTs61-QyA",
    iconPrefix: "fab",
  },
  {
    name: "envelope",
    url: "mailto:organizers@yhack.org",
    iconPrefix: "fas",
  },
];
</script>

<template>
  <section id="home" class="home">
    <div class="splash">
      <div class="yhack">
        <img src="../assets/images/yhack/logo.png" class="logo" alt="logo" />
      </div>
      <div class="countdown flx">
        <div class="finished" v-if="countdownFinished">
          <h2>Countdown finished!</h2>
        </div>
        <h1 class="numbers" v-else>
          <span>{{ days }}</span
          >d <span>{{ hours }}</span
          >h <span>{{ minutes }}</span
          >m <span>{{ seconds }}</span
          >s
        </h1>
      </div>
      <div class="date">
        <h2>Oct 5th - 6th, 2024</h2>
      </div>
      <div class="socials flx">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="urls"
        >
          <font-awesome-icon :icon="[social.iconPrefix, social.name]" />
        </a>
      </div>
      <div class="apply flx">
        <a
          class="btnapply"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJPFqBPuTwcsCoULluGGmodo24mNgHM3w1HIvpewpKgFdybw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          >SIGN UP</a
        >
        <br /><br />
        <h3 class="deadline">
          <strong>Priority applications due Sep 19, 11:59 PM ET</strong>
        </h3>
        <h3 class="deadline">All applications due Sep 22, 11:59 PM ET</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  height: calc(100vh - 6.5rem);
}
.splash {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(0, 8%);
}
.yhack .logo {
  max-width: 768px;
  width: 100%;
}
.countdown {
  font-size: 2.125rem;
  text-shadow: -3px 3px #8a14aa;
  text-align: center;
}

.date {
  border-bottom: 2px solid #fff;
  padding-bottom: 0.5rem;
  margin: 0.5rem 0;
}
.date h2 {
  font-size: 2rem;
  font-weight: 300;
  text-shadow: 2px 2px 4px #1c0024;
}
.socials {
  margin: 0.5rem 0;
  gap: 1.75rem;
  font-size: 1.5rem;
}
@media screen and (min-width: 768px) {
  .socials {
    font-size: 2rem;
  }
}
.socials a {
  color: #fff;
  transition: 250ms;
}
.apply {
  flex-direction: column;
  margin-top: 1rem;
}
.btnapply {
  background-color: #9743cc;
  border: 3px solid #300554;
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  transition: 250ms;
  font-size: 1.375rem;
  font-weight: 700;
}
.deadline {
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0.75rem;
  text-shadow: 2px 2px 4px #1c0024;
}
@media (hover: hover) {
  .socials a:hover {
    transform: translateY(-2.5px);
    color: #f9e3ff;
  }
  .btnapply:hover {
    transform: scale(1.05);
    background-color: #300554;
    border: 3px solid #9743cc;
  }
  .btnapply:active {
    transform: scale(0.975);
  }
}
@media only screen and (max-width: 767px) {
  .home {
    padding-top: 2rem;
  }
}
</style>
