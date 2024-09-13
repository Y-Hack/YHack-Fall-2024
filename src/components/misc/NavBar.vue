<script setup>
const links = [
  { href: '/#home', label: 'HOME', class: 'goto' },
  { href: '/#about', label: 'ABOUT', class: 'goto' },
  { href: '/#tracks', label: 'TRACKS', class: 'goto' },
  { href: '/#faqs', label: 'FAQs', class: 'goto' },
  { href: '/#sponsors', label: 'SPONSORS', class: 'goto' },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdJPFqBPuTwcsCoULluGGmodo24mNgHM3w1HIvpewpKgFdybw/viewform',
    label: 'APPLY',
    class: 'goto apply',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
]
</script>

<template>
  <header class="navigation">
    <nav class="navwrapper">
      <div class="logo">
        <a href="/#home" class="linkhome">
          <img src="../../assets/images/yhack/heart.png" class="heart" alt="logo" />
        </a>
      </div>
      <ul class="pagelinks">
        <li v-for="link in links" :key="link.label" :class="link.class">
          <a :href="link.href" :target="link.target" :rel="link.rel">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navigation {
  position: static;
  width: 100%;
  min-height: 6.5rem;
  background: linear-gradient(to bottom, rgba(6, 0, 14, 0.5), rgba(0, 0, 0, 0));
}
.navwrapper {
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.heart {
  width: 64px;
  min-width: 64px;
  filter: drop-shadow(2px 4px 6px rgb(26, 0, 30));
}
.pagelinks {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.75rem;
}
.goto a {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
}
.apply {
  transition: 250ms;
}
.apply a {
  background-color: #9743cc;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
@media (hover: hover) {
  .apply:hover {
    transform: scale(1.025);
  }
  .apply:active {
    transform: scale(0.975);
  }
}
@media only screen and (max-width: 767px) {
  .navwrapper {
    padding: 0.5rem 1.5rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
@media only screen and (max-width: 640px) {
  .pagelinks {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.125rem;
  }
}
</style>
