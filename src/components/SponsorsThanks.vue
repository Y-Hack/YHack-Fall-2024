<script>
import FD from '@/assets/images/sponsors/fidelity.png'
import HF from '@/assets/images/sponsors/hf.png'
import SEAS from '@/assets/images/sponsors/seas.png'
import SUPA from '@/assets/images/sponsors/supabase.png'
import TSAI from '@/assets/images/sponsors/tsai.png'
import WOLF from '@/assets/images/sponsors/wolfram.png'
import DESHAW from '@/assets/images/sponsors/deshaw.png'
import FP from '@/assets/images/sponsors/fp.png'
import AF from '@/assets/images/sponsors/actualfood.png'

export default {
  data() {
    return {
      FD: FD,
      HF: HF,
      SEAS: SEAS,
      SUPA: SUPA,
      TSAI: TSAI,
      WOLF: WOLF,
      DESHAW: DESHAW,
      FP: FP,
      AF: AF
    }
  }
}
</script>
<template>
  <section id="sponsors" class="-ty-sponsors">
    <div class="-spons-wrap">
      <div class="-spons-head">
        <div class="-glitch-wrapper">
          <h2 class="-spons-title glitch -txsh" data-text="Sponsors">Sponsors</h2>
        </div>
        <p class="-spons-blurb -txsh">
          Interested in sponsoring YHack?
          <br />
          Email us at
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:organizers@yhack.org"
              class="-mail-us"
            >
              organizers@yhack.org</a
            >!
          </strong>
        </p>
      </div>
      <div class="-sponsors-list">
        <a href="https://www.deshaw.com/" target="_blank" rel="noopener noreferrer">
          <img :src="DESHAW" alt="DESHAW" class="-slogo" />
        </a>
        <!-- <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer">
            <img :src="SUPA" alt="SUPABASE" class="-slogo" />
        </a> -->
        <a href="https://city.yale.edu/" target="_blank" rel="noopener noreferrer">
          <img :src="TSAI" alt="TSAI CITY" class="-slogo" />
        </a>
        <a href="https://seas.yale.edu/" target="_blank" rel="noopener noreferrer">
          <img :src="SEAS" alt="SEAS" class="-slogo" />
        </a>

        <!-- <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">
            <img :src="HF" alt="HF" class="-slogo" />
        </a> -->
        <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
          <img :src="WOLF" alt="WOLFRAM" class="-slogo" />
        </a>
        <!-- <a href="https://www.freshprints.com/" target="_blank" rel="noopener noreferrer">
            <img :src="FP" alt="FRESH PRINTS" class="-slogo" />
        </a> -->
        <!-- <a href="http://www.actualfood.com/" target="_blank" rel="noopener noreferrer">
            <img :src="AF" alt="ACTUAL FOOD" class="-slogo" />
        </a> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.-ty-sponsors {
  min-height: 100vh;
  padding: 2rem;
}
.-spons-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.-spons-head {
  max-width: 767px;
}
.-spons-title {
  text-align: center;
  font-size: 3.5rem;
}
.-spons-blurb {
  text-align: center;
  font-size: 1.5rem;
}
.-mail-us {
  color: #fff;
  transition: 300ms ease;
}
@media (hover: hover) {
  .-mail-us:hover {
    text-decoration: underline;
  }
}
.-sponsors-list {
  background-color: #fff;
  padding: 2rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.-slogo {
  width: 20vw;
  padding: 0.5rem;
}
.-glitch-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-it 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-it 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #ff00ff;
  z-index: -2;
}

.-slogo {
  background-color: transparent; /* Ensures background is transparent */
  width: 20vw;
  padding: 0.5rem;
}

.-sponsors-list {
  background-color: transparent; /* Make sure the container is transparent */
}

@keyframes glitch-it {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  to {
    transform: translate(0);
  }
}

@media only screen and (max-width: 767px) {
  .-spons-title {
    font-size: 2.5rem;
  }
  .-spons-blurb {
    font-size: 1.25rem;
  }
}

@media only screen and (max-width: 567px) {
  .-sponsors-list {
    flex-wrap: unset;
    flex-direction: column;
  }

  .-slogo {
    width: unset;
  }
}
</style>
