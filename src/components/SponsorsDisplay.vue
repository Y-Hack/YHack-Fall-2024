<script setup>
import SEAS from "@/assets/images/sponsors/seas.png";
import TSAI from "@/assets/images/sponsors/tsai.png";
import WOLF from "@/assets/images/sponsors/wolfram.png";
import DESHAW from "@/assets/images/sponsors/deshaw.png";
import MLH from "@/assets/images/sponsors/mlh-logo.svg";
import YALE from "@/assets/images/sponsors/yale.png";

const sponsors = [
  { name: "D.E. Shaw", src: DESHAW, url: "https://www.deshaw.com/" },
  { name: "Wolfram", src: WOLF, url: "https://www.wolfram.com/" },
  { name: "SEAS", src: SEAS, url: "https://seas.yale.edu/" },
  { name: "TSAI CITY", src: TSAI, url: "https://city.yale.edu/" },
  { name: "MLH", src: MLH, url: "https://mlh.io/" },
  { name: "YALE", src: YALE, url: "https://yalecollege.yale.edu/" },
];
</script>

<template>
  <section id="sponsors" class="sponsors minvh">
    <h1 class="head">
      <font-awesome-icon :icon="['fas', 'certificate']" class="certif" />
      SPONSORS
    </h1>
    <h2 class="sponsormsg">
      Interested in sponsoring YHack?
      <span>We are Yale's premier hackathon!</span>
    </h2>
    <h3 class="dropemail">
      Email us at
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:organizers@yhack.org"
      >
        organizers@yhack.org</a
      >!
    </h3>
    <div class="sponsorsdisplay">
      <div class="sponsorsinfo">
        <a
          class="sponsorslink"
          v-for="(sponsor, index) in sponsors"
          :key="index"
          :href="sponsor.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="sponsor.src" :alt="sponsor.name" class="sponsorslogo" />
        </a>
      </div>
    </div>
    <p class="moresponsors">... and more to come!</p>
  </section>
</template>

<style scoped>
.sponsors {
  padding: 3rem 0;
}
.head {
  font-size: 3.25rem;
  text-shadow: -3px 3px #cd21fd;
}
.certif {
  font-size: 2.625rem !important;
  margin-right: 0.25rem;
}
.sponsormsg {
  font-size: 2rem;
  padding: 1.5rem 0 0.5rem 0;
}
.sponsormsg span {
  font-style: italic;
  font-weight: 400;
}
.dropemail {
  font-size: 1.5rem;
  font-weight: 300;
}
@media screen and (min-width: 768px) {
  .dropemail {
    font-size: 2rem;
  }
}
.dropemail a {
  color: #fff;
  text-decoration: underline;
}
.sponsorsdisplay {
  margin-top: 1.75rem;
  border-left: 0.75rem solid #fff;
}
.sponsorsinfo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 1.5rem;
  padding: 1rem 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.875),
    rgba(255, 255, 255, 0.875)
  );
}
.sponsorslogo {
  max-width: 250px;
  width: 100%;
  padding: 1rem;
  transition: 250ms;
}
.moresponsors {
  padding: 1rem 0;
  font-size: 1.5rem;
}
@media only screen and (max-width: 767px) {
  .sponsorsinfo {
    margin-left: 1rem;
  }
}
@media (hover: hover) {
  .sponsorslogo:hover {
    transform: scale(1.075);
  }
  .sponsorslogo:active {
    transform: scale(0.975);
  }
}
</style>
