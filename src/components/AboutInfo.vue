<script setup></script>

<template>
  <section id="about" class="about minvh">
    <div class="aboutwrapper flx">
      <div class="info">
        <h1 class="head">ABOUT</h1>
        <p class="desc">
          YHack is Yale's premier hackathon. We invite all students who share
          our passion for innovation and learning to immerse yourselves in an
          energetic atmosphere, learning and creating alongside individuals as
          passionate as yourselves! Expect a myriad of spectacular rewards,
          deeply technical workshops, renowned guest speakers, and engaging
          activities throughout the event!
        </p>
      </div>
      <div class="statistics">
        <div class="statsone flx">
          <div class="stat">
            <h1 class="value">500</h1>
            <h2 class="caption">Hackers</h2>
          </div>
          <div class="stat">
            <h1 class="value">125</h1>
            <h2 class="caption">Universities</h2>
          </div>
          <div class="stat">
            <h1 class="value">40</h1>
            <h2 class="caption">Projects</h2>
          </div>
        </div>
        <div class="statstwo flx">
          <div class="stat">
            <h1 class="value">10+</h1>
            <h2 class="caption">Judges</h2>
          </div>
          <div class="stat">
            <h1 class="value">24</h1>
            <h2 class="caption">Hours</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 5rem 0;
}
.aboutwrapper {
  flex-direction: column;
  gap: 5rem;
}
.head {
  font-size: 3.25rem;
  text-shadow: -3px 3px #8a14aa;
}
.desc {
  font-size: 1.75rem;
  font-weight: 300;
  text-shadow: 2px 2px 4px #1c0024;
}
.statistics {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.statsone,
.statstwo {
  gap: 4rem;
  flex-wrap: wrap;
}
.value {
  font-size: 4.5rem;
  text-shadow: -3px 3px #8a14aa;
}
.caption {
  font-size: 2rem;
  font-weight: 300;
  text-shadow: -2px 2px #8a14aa;
}
@media only screen and (max-width: 567px) {
  .statistics {
    gap: 3rem;
  }
  .value {
    font-size: 3rem;
  }
  .caption {
    font-size: 1.5rem;
  }
}
</style>
