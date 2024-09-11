<script>
export default {
  data() {
    return {
      menuItems: [
        { href: '#home', class: '-a', text: 'Home' },
        { href: '#about', class: '-a', text: 'About' },
        { href: '#tracks', class: '-a', text: 'Tracks' },
        { href: '#speakers', class: '-a -dne', text: 'Speakers' },
        { href: '#faqs', class: '-a', text: 'FAQs' },
        { href: '#schedule', class: '-a', text: 'Schedule' },
        { href: '#sponsors', class: '-a', text: 'Sponsors' }
      ],
      toggled: false
    }
  },
  methods: {
    toggleState() {
      this.toggled = !this.toggled
      if (this.toggled) {
        this.toggleOn()
      } else {
        this.toggleOff()
      }
    },
    toggleOn() {
      const toggleOn = document.querySelector('#nB')
      if (toggleOn) {
        toggleOn.style.bottom = '0'
      }
    },
    toggleOff() {
      const toggleOff = document.querySelector('#nB')
      if (toggleOff) {
        toggleOff.style.bottom = '-100%'
      }
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <a href="#home" class="navbar-logo">
        <img src="/src/assets/images/yhack-gear.png" alt="yhack logo" />
      </a>
      <div class="-nav-burger">
        <!-- <i class="fas fa-bars -bars-x" @click="toggleState">X</i> -->
        <font-awesome-icon :icon="['fas', 'bars']" class="fa-2x" @click="toggleState" />
      </div>
      <ul class="navbar-items" :class="{ active: toggled }" id="nB">
        <div class="-nav-burger">
          <font-awesome-icon :icon="['fas', 'xmark']" class="fa-lg" @click="toggleState" />
        </div>
        <li><a href="#home" @click="toggleState">Home</a></li>
        <li><a href="#about" @click="toggleState">About</a></li>
        <li><a href="#tracks" @click="toggleState">Tracks</a></li>
        <!-- <li class="-greyed"><a href="#speakers" @click="toggleState">Speakers</a></li> -->
        <li><a href="#sponsors" @click="toggleState">Sponsors</a></li>
        <li><a href="#faqs" @click="toggleState">FAQs</a></li>
        <li class="_apply_">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdJPFqBPuTwcsCoULluGGmodo24mNgHM3w1HIvpewpKgFdybw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            >Apply</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Styles for Hamburger and Navigation Menu */
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.navbar-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
}

.navbar-logo {
  visibility: hidden;

  height: 64px;
  width: 64px;
  margin-right: auto;
}
@media screen and (min-width: 768px) {
  .navbar-logo {
    visibility: visible;
  }
}

.navbar-items {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
}

.navbar-items li {
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
}

.navbar-items li > a {
  text-decoration: none;
  color: #fff;
}

._apply_ {
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  background: #611292;
  padding: 0.25rem 0.825rem;
  transition: 300ms ease;
  border-radius: 8px;
}

/* Hamburger Icon */
.-nav-burger {
  display: none;
}

@media (max-width: 767px) {
  .-nav-burger {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    position: relative;
  }

  .-bars-x {
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 9;
  }

  .navbar-items {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1000;
  }

  .navbar-items.active {
    display: flex;
    opacity: 1;
  }

  .navbar-items li > a {
    font-size: 1.5rem;
  }

  ._apply_ {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (hover: hover) {
  .navbar-items li > a:hover {
    text-decoration: underline;
  }

  ._apply_:hover {
    transform: scale(1.0625);
  }
}
</style>
