<script setup></script>

<template>
  <section id="tracks" class="tracks minvh">
    <h1 class="head">TRACKS</h1>
    <div class="tracklist">
      <div class="trackrow flx">
        <div class="trackwrapper flx">
          <h1 class="trackname">Sustainability</h1>
          <img
            src="../assets/images/tracks/sustainability-track.png"
            class="trackimg"
            alt="logo"
          />
        </div>
        <p class="trackinfo">
          ... focuses on addressing environmental and social challenges to
          ensure a more sustainable future for our planet. Participants in this
          track may explore innovative solutions that promote renewable energy,
          reduce carbon footprint, minimize waste, promote conservation, or
          address issues related to climate change.
        </p>
      </div>
      <div class="trackrow flx">
        <div class="trackwrapper flx">
          <h1 class="trackname">Healthcare</h1>
          <img
            src="../assets/images/tracks/health-track.png"
            class="trackimg"
            alt="logo"
          />
        </div>
        <p class="trackinfo">
          ... aims to address challenges in healthcare delivery, improve patient
          outcomes, and advance medical research and innovation. Participants
          may develop solutions that leverage technology to enhance access to
          healthcare services, improve diagnostics, personalize treatment plans,
          or empower patients to manage their health better.
        </p>
      </div>
      <div class="trackrow flx">
        <div class="trackwrapper flx">
          <h1 class="trackname">Entertainment & Media</h1>
          <img
            src="../assets/images/tracks/media-track.png"
            class="trackimg"
            alt="logo"
          />
        </div>
        <p class="trackinfo">
          ... emphasizes leveraging technology to innovate and enhance the
          entertainment industry and media landscape. Participants may explore
          ways to create immersive experiences, develop interactive storytelling
          platforms, enhance content creation and distribution, or revolutionize
          the gaming industry.
        </p>
      </div>
      <div class="trackrow flx">
        <div class="trackwrapper flx">
          <h1 class="trackname">Education</h1>
          <img
            src="../assets/images/tracks/education-track.png"
            class="trackimg"
            alt="logo"
          />
        </div>
        <p class="trackinfo">
          ... is dedicated to improving access to quality education and
          enhancing learning experiences for people of all ages and backgrounds.
          Participants may develop tools, platforms, or initiatives that make
          education more accessible, engaging, and effective.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes brightness-animation {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.5);
  }
}
.tracks {
  padding: 2rem 0;
}
.head {
  text-align: center;
  font-size: 3.25rem;
  text-shadow: -3px 3px #8a14aa;
}
.tracklist {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.trackrow {
  gap: 1.5rem;
}
.trackwrapper {
  flex-direction: column;
  min-width: 250px;
}
.trackname {
  font-size: 2.25rem;
  text-shadow: -2px 2px #c727f4;
  text-align: center;
}
.trackimg {
  max-width: 160px;
  width: 100%;
  transition: 250ms;
  animation: brightness-animation 1.5s infinite alternate;
}
@media (hover: hover) {
  .trackimg:hover {
    transform: scale(1.05);
  }
}
.trackinfo {
  font-size: 1.375rem;
  font-weight: 300;
  text-shadow: 2px 2px 4px #1c0024;
}
@media only screen and (max-width: 567px) {
  .trackrow {
    flex-direction: column;
  }
}
</style>
