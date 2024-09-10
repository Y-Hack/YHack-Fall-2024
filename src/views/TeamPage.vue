<script>
import Austin from '@/assets/images/members/Austin.jpg'
import Brandon from '@/assets/images/members/Brandon.jpg'
import Ken from '@/assets/images/members/Ken.png'
import Lee from '@/assets/images/members/Lee.jpg'
import Leslie from '@/assets/images/members/Leslie.png'
import Noah from '@/assets/images/members/Noah.jpg'
import Michael from '@/assets/images/members/Michael.jpeg'

export default {
  data() {
    return {
      michael: Michael,
      austin: Austin,
      brandon: Brandon,
      ken: Ken,
      lee: Lee,
      leslie: Leslie,
      noah: Noah,
    };
  }
}
</script>

<template>
  <section id="team" class="-team-hacks">
    <div class="-go-back">
      <RouterLink to="/" class="-back">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="-bx" />
      </RouterLink>
    </div>
    <div class="-cards-container -flx">
        <h1 class="-card-head">
            MEET THE TEAM!
        </h1>
        <div class="-all-cards">
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="lee" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Lee</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">lee.muita@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="austin" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Austin</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">austin.wang.aw938@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="brandon" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Brandon</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">brandon.yee@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="ken" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Kenny</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">kenny.tung@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="leslie" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Leslie</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">leslie.kim@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="noah" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Noah</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">noah.dee@yale.edu</p>
                </div>
            </div>
            <div class="-card-wrapper">
                <div class="-card-img">
                    <img :src="michael" class="-card-img-x" alt="">
                </div>
                <div class="-card-name">
                    <p class="-card-p -p-name">Michael</p>
                </div>
                <div class="-card-email">
                    <p class="-card-p -p-x">michael.chu@yale.edu</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.-p-x {
    text-decoration: underline;
    font-style: italic;
    font-size: 0.875rem;
}
.-card-name {
    padding: 0.5rem 0;
    font-size: 1.25rem;
}
.-card-img-x {
    width: 200px;
    height: 200px;
}
.-cards-container {
    margin: 0 auto;
    max-width: 992px;
    flex-direction: column;
    padding: 5rem 1rem;
    gap: 2rem;
}

.-all-cards {
    display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 1rem; 
}

@media (max-width: 768px) {
  .-all-cards  {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 568px) {
  .-all-cards  {
    grid-template-columns: repeat(1, 1fr); 
  }
}

.-card-wrapper {
    background-color: #fff;
    padding: 1rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.-card-p {
    color: #000;
}

.-card-head {
    font-size: 2.5rem;
    background-color: #fff;
    color: #000;
    padding: 0 5rem;
}

.-team-hacks {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/images/yhackbg.tiff');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}
.-go-back {
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
}

.-bx {
  font-size: 1.5rem;
  transition: 300ms ease;
  color: #fff;
  background: #000;
  padding: 0.825rem;
  transition: 250ms;
  border-radius: 8px;
}

@media (hover: hover) {
    .-bx:hover {
        background: #fff;
        color: #000;
    }
}
</style>