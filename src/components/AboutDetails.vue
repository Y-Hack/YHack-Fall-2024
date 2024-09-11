<script setup></script>
<template>
  <section id="about" class="-abt-container">
    <div class="abt-wrapper">
      <div class="abt-info">
        <h1 class="-htitle">ABOUT</h1>
        <p class="-habout">
          YHack is Yale's premier hackathon. We invite all students who share our passion for
          innovation and learning to immerse yourselves in an energetic atmosphere, learning and
          creating alongside individuals as passionate as yourselves! Expect a myriad of spectacular
          rewards, deeply technical workshops, renowned guest speakers, and engaging activities
          throughout the event!
        </p>
      </div>
      <div class="abt-stats">
        <div class="abt-data">
          <div class="abt-stat01">
            <h1 class="abt-number">500</h1>
            <h2 class="abt-caption">Hackers</h2>
          </div>
          <div class="abt-stat01">
            <h1 class="abt-number">125</h1>
            <h2 class="abt-caption">Universities</h2>
          </div>
          <div class="abt-stat01">
            <h1 class="abt-number">20</h1>
            <h2 class="abt-caption">Projects</h2>
          </div>
          <div class="abt-stat01">
            <img class="controller" src="/src/assets/images/media_track.png" alt="controller" />
          </div>
          <div class="abt-stat01 item4">
            <h1 class="abt-number">10</h1>
            <h2 class="abt-caption">Judges</h2>
          </div>
          <div class="abt-stat01 item5">
            <h1 class="abt-number">48</h1>
            <h2 class="abt-caption">Hours</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.controller {
  width: 10rem;
}

.-abt-container {
  padding: 4rem 10rem;
  min-height: 100vh;
}

.-htitle {
  font-size: 2.75rem;
  line-height: 3.5rem;
  text-shadow: -3px 3px #8a14aa;
}

.-habout {
  font-size: 1.25rem;
}

@media screen and (min-width: 768px) {
  .abt-info {
    width: 600px;
  }
}

.abt-stats {
  display: flex;
  justify-content: center;
}

.abt-data {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2.5rem;
  padding: 2.5rem 0;
}

@media screen and (min-width: 768px) {
  .abt-stats {
    justify-content: end;
  }
  .abt-data {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2.5rem;
    padding: 2.5rem 0;
  }
}

.abt-stat01 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.abt-number {
  font-size: 1.5rem;
  font-weight: 500;
  text-shadow: -3px 3px #8a14aa;
}

.abt-caption {
  font-size: 1rem;
  font-weight: 300;
  text-shadow: -3px 3px #8a14aa;
}

@media screen and (min-width: 768px) {
  .abt-number {
    font-size: 4.5rem;
  }

  .abt-caption {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 767px) {
  .-abt-container {
    padding: 4rem 2rem;
  }
}

@media only screen and (max-width: 567px) {
  .-abt-container {
    padding: 4rem 1rem;
  }
}
</style>
