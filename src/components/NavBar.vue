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
        toggleOn.style.bottom = '6.8%'
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
      <a href="#home" class="navbar-logo"><img src="/src/assets/images/yhack-gear.png" alt="yhack logo"></a>
      <ul class="navbar-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li class="-greyed"><a href="#speakers">Speakers</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li class="_apply_"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdJPFqBPuTwcsCoULluGGmodo24mNgHM3w1HIvpewpKgFdybw/viewform" target="_blank" 
        rel="noopener noreferrer">Apply</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.-greyed {
  opacity: 0.375;
}
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
  height: 64px;
  width: 64px;
  margin-right: auto;
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
.navbar-items li{
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
}
.navbar-items li > a {
  text-decoration: none;
  color: #fff;
}
.-nav-sys {
  bottom: 0;
  width: 100%;
  background-image: url('@/assets/images/nav.png');
  z-index: 1000;
}
.-nav-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
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
.-a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding: 0.375rem 0;
}
.-a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.3s ease;
}
.-dne {
  opacity: 0.25;
}
.-nav-burger {
  display: none;
}
@media (hover: hover) {
  .-a:hover::before {
    width: 100%;
  }
  .-dne:hover::before {
    width: unset !important;
  }
  ._apply_:hover {
    transform: scale(1.0625);
  }
}
@media only screen and (max-width: 767px) {
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
  .-nav-bar {
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    grid-template-rows: repeat(2, 3rem);
    gap: 1rem;
    padding-top: 2rem;
    height: unset;
    width: 100%;
    bottom: -100%;
    position: fixed;
    padding: 3rem 1rem 2rem 1rem;
    background-image: url('@/assets/images/nav.png');
    filter: brightness(2);
  }
  .-a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: unset;
    text-decoration: underline;
  }
  .-a:hover::before {
    width: unset;
  }
  ._apply_ {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 567px) {
  .-a,
  ._apply_ {
    font-size: 1.25rem;
  }

  .-nav-bar {
    grid-template-columns: repeat(3, 8rem);
  }
}

@media only screen and (max-width: 400px) {
  .-a,
  ._apply_ {
    font-size: 1.125rem;
  }

  ._apply_ {
    text-align: center;
  }

  .-nav-bar {
    grid-template-columns: repeat(3, 6rem);
  }
}
</style>
