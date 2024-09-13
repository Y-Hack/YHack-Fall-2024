<template>
  <section id="tracks" class="-tracks-types -minvh">
    <div class="-trk-h">
      <h1 class="-trk-title -TRACKS -txsh" data-text="TRACKS">TRACKS</h1>
    </div>
    <div class="-trk-container">
      <div class="-trk-row">
        <div class="-trk-profile">
          <h1 class="-trk-name">Sustainability</h1>
          <img src="/src/assets/images/sustainability_track.png" class="-trk-img" />
        </div>
        <div class="-trk-desc">
          <p class="-trk-desc-x">
            Sustainability track focuses on addressing environmental and social challenges to
            ensure a more sustainable future for our planet. Participants in this track may
            explore innovative solutions that promote renewable energy, reduce carbon footprint,
            minimize waste, promote conservation, or address issues related to climate change.
          </p>
        </div>
      </div>
      <div class="-trk-row">
        <div class="-trk-profile">
          <h1 class="-trk-name">Healthcare</h1>
          <img src="/src/assets/images/health_track.png" class="-trk-img" />
        </div>
        <div class="-trk-desc">
          <p class="-trk-desc-x">
            The Healthcare track aims to address challenges in healthcare delivery, improve patient
            outcomes, and advance medical research and innovation. Participants may develop
            solutions that leverage technology to enhance access to healthcare services, improve
            diagnostics, personalize treatment plans, or empower patients to manage their health
            better.
          </p>
        </div>
      </div>
      <div class="-trk-row">
        <div class="-trk-profile">
          <h1 class="-trk-name">Entertainment & Media</h1>
          <img src="/src/assets/images/media_track.png" class="-trk-img" />
        </div>
        <div class="-trk-desc">
          <p class="-trk-desc-x">
            The Entertainment & Media track focuses on leveraging technology to innovate and
              enhance the entertainment industry and media landscape. Participants may explore ways
              to create immersive experiences, develop interactive storytelling platforms, enhance
              content creation and distribution, or revolutionize the gaming industry.
          </p>
        </div>
      </div>
      <div class="-trk-row">
        <div class="-trk-profile">
          <h1 class="-trk-name">Education</h1>
          <img src="/src/assets/images/education_track.png" class="-trk-img" />
        </div>
        <div class="-trk-desc">
          <p class="-trk-desc-x">
            The Education track is dedicated to improving access to quality education and
              enhancing learning experiences for people of all ages and backgrounds. Participants
              may develop tools, platforms, or initiatives that make education more accessible,
              engaging, and effective.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.-trk-name {
  font-size: 1.75rem;
  text-align: center;
}
.-trk-row {
  display: flex;
  gap: 1.5rem;
}
.-trk-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.-trk-img {
  width: 150px;
}
.-trk-profile {
  min-width: 200px;
}
.-TRACKS {
  font-size: 3rem;
  text-align: center;
  text-shadow: -3px 3px #8a14aa;
}
.-tracks-types {
  padding: 6rem 2rem;
  min-height: 100vh;
}
.-trk-desc {
  display: flex;
  align-items: center;
}
.-trk-desc-x {
  font-size: 1rem;
}
.-trk-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;
  max-width: 767px;
  margin: 0 auto;
  gap: 1rem;
}
.-trk-h {
  margin-bottom: 3rem;
}
.glitch {
  position: relative;
  font-size: 3rem;
  color: white;
  text-align: center;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 0;
  text-shadow: -2px 0 #fc00ff;
  animation: glitch-anim 1s infinite linear alternate-reverse;
}

.glitch::after {
  left: 0px;
  text-shadow: 2px 0 #00fffc;
  animation: glitch-anim 1s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    transform: translate(0);
  }
  25% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 1px);
  }
  75% {
    transform: translate(1px, -1px);
  }
  100% {
    transform: translate(-1px, 1px);
  }
}

@media only screen and (max-width: 767px) {
  .-brk {
    display: none;
  }
  .-trk-container {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}

@media only screen and (max-width: 767px) {
  .-trk-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .-trk-row {
    display: flex;
    flex-direction: column;
  }
  .-tracks-types {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
