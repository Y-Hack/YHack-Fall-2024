<script setup>
import { ref } from 'vue'
import TitleSplash from '../components/TitleSplash.vue'
import CountDown from '../components/CountDown.vue'

const date = ref('Oct 5th - 6th, 2024 ')
</script>

<template>
  <section id="home" class="splash">
    <div class="splash-content">
      <img class="logo" src="/src/assets/images/yhack-logo.png" alt="yhack logo" />
      <CountDown />
      <div class="start-date">
        <h3>{{ date }}</h3>
      </div>
      <div class="-splsh-socials">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/whyhackatyhack"
          class="-sm"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/whyhackatyhack/"
          class="-sm"
        >
          <font-awesome-icon :icon="['fab', 'square-instagram']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/whyhackatyhack"
          class="-sm"
        >
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/25075624/admin/"
          class="-sm"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCu10FhvXTa9tp5VTs61-QyA"
          class="-sm"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:organizers@yhack.org" class="-sm">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
      <li class="_apply_">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJPFqBPuTwcsCoULluGGmodo24mNgHM3w1HIvpewpKgFdybw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          >Apply</a
        >
      </li>
      <div style="font-size: 1rem; margin-top: 1rem">Applications due Sep 22, 11:59 PM ET</div>
    </div>
  </section>
</template>

<style scoped>
._apply_ {
  font-size: 1.5rem;
  font-weight: 400;
  background: #9743cc;
  border: 3px solid #3b0052;
  padding: 0.5rem 1.5rem;
  transition: 300ms ease;
  border-radius: 8px;
  margin-top: 1rem;
}
._apply_ > a {
  color: white;
  font-weight: 700;
  text-transform: uppercase;
}
._apply_:hover {
  transform: scale(1.0625);
}
.logo {
  width: 40rem;
  padding: 3rem 0 1rem 0;
}
.splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 96px);
  color: white;
}
.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(0, -17.5%);
}
.start-date {
  font-size: 1rem;
  padding-bottom: 0.15rem;
  border-bottom: 2px solid white;
}
@media screen and (min-width: 768px) {
  .start-date {
    font-size: 1.375rem;
  }
}
.start-date h3 {
  font-weight: 400;
}
.-splsh-socials {
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.75rem;
  transition: 250ms;
}
.-splsh-socials a:hover {
  color: #f8d4ff !important;
}
.-brk {
  display: none;
}
.-splsh-main {
  padding: 2rem 4rem;
}
.-splsh-wrap {
  padding: 3rem 2rem;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 992px;
}
.-splsh-host {
  width: fit-content;
}
.-splsh-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.-host-yale {
  font-size: 1.25rem;
  font-weight: 300;
  border-bottom: solid 0.1rem #fff;
  padding-bottom: 0.25rem;
  text-align: center;
}
.-splsh-time {
  margin: 2rem 0;
}
.-splsh-as {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.-splsh-apply {
  width: fit-content;
}
.-rkt {
  padding-right: 0.1rem;
  font-size: 1rem;
}
.-apply-here {
  color: #000;
  background-color: #fff;
  border: solid 2px transparent;
  font-size: 1.125rem;
  padding: 0.75rem 1.125rem;
  transition: 350ms ease;
}
.-ap {
  font-size: 0.925rem;
  padding-right: 0.125rem;
}
.-mail-btn {
  color: #fff;
  background-color: #000;
  border: solid 2px #fff;
  font-size: 1.125rem;
  padding: 0.75rem 1.625rem;
  transition: 350ms ease;
  font-weight: 400;
}
.-splsh-socials {
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.75rem;
}
.-sm {
  color: #fff;
  font-size: 1.5rem;
  transition: 300ms ease;
}
.-splsh-rest {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.-note-yale {
  font-size: 1.25rem;
  font-weight: 300;
  padding-top: 0.5rem;
  text-align: center;
  font-style: italic;
}
@media (hover: hover) {
  .-apply-here:hover {
    color: #fff;
    border: solid 2px #fff;
    background-color: #000;
  }
  .-mail-btn:hover {
    color: #000;
    border: solid 2px #fff;
    background-color: #fff;
  }
  .-sm:hover {
    transform: translateY(-3px);
  }
}

@media only screen and (max-width: 767px) {
  .-splsh-main {
    padding: 6rem 2rem;
  }
  .-splsh-wrap {
    padding: 5rem 0;
  }
}

@media only screen and (max-width: 567px) {
  .-splsh-main {
    padding: unset;
  }
  .-splsh-wrap {
    padding: 2rem 1rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .-brk {
    display: block;
  }
}

@media only screen and (max-width: 450px) {
  .-splsh-as {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 1rem;
    justify-content: center;
  }
  .-mail-btn {
    padding: 0.75rem 1.8rem;
  }
}
</style>
