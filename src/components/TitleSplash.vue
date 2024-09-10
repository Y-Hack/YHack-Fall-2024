<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="c">
    <div class="-glitched-wrap">
      <p class="-x-title">
        <span aria-hidden="true"> {{ title }} </span>
        {{ title }}
        <span aria-hidden="true"> {{ title }} </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* inspired from https://codepen.io/cbanlawi/pen/xxRBeMY */

.c {
  display: flex;
}

.-glitched-wrap {
  text-align: center;
}

.-x-title {
  font-size: 10rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow:
    0.05em 0 0 #00fffc,
    -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: -x-title 1s infinite;
}

.-x-title span {
  position: absolute;
  top: 0;
  left: 0;
}

.-x-title span:first-child {
  animation: -x-title 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.-x-title span:last-child {
  animation: -x-title 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes -x-title {
  0% {
    text-shadow:
      0.05em 0 0 #00fffc,
      -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow:
      0.05em 0 0 #00fffc,
      -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow:
      -0.05em -0.025em 0 #00fffc,
      0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow:
      -0.05em -0.025em 0 #00fffc,
      0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow:
      0.05em 0.035em 0 #00fffc,
      0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow:
      0.05em 0.035em 0 #00fffc,
      0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow:
      -0.05em 0 0 #00fffc,
      -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

@media only screen and (max-width: 767px) {
  .-x-title {
    font-size: 7rem;
  }
}
@media only screen and (max-width: 567px) {
  .-x-title {
    font-size: 6rem;
  }
}
</style>
