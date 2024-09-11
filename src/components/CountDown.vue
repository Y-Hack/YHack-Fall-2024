<script>
export default {
  data() {
    return {
      yhackDate: new Date('2024-10-05T08:00:00'),
      countdownFinished: false,
      timeLeft: null,
      intervalId: null
    }
  },
  computed: {
    days() {
      return String(Math.floor(this.timeLeft / (60 * 60 * 24))).padStart(2, '0')
    },
    hours() {
      return String(Math.floor((this.timeLeft % (60 * 60 * 24)) / (60 * 60))).padStart(2, '0')
    },
    minutes() {
      return String(Math.floor((this.timeLeft % (60 * 60)) / 60)).padStart(2, '0')
    },
    seconds() {
      return String(Math.floor(this.timeLeft % 60)).padStart(2, '0')
    }
  },
  created() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      const now = new Date()
      const difference = this.yhackDate - now
      this.timeLeft = Math.max(difference, 0) / 1000

      if (this.timeLeft <= 0) {
        this.countdownFinished = true
      } else {
        this.intervalId = setInterval(() => {
          const now = new Date()
          const difference = this.yhackDate - now
          this.timeLeft = Math.max(difference, 0) / 1000

          if (this.timeLeft <= 0) {
            this.countdownFinished = true
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<template>
  <time id="-t" class="-count-down">
    <div v-if="countdownFinished" class="-count-over">
      <p id="-fin" class="-yhack-init -m">More info coming soon!</p>
    </div>
    <div v-else-if="timeLeft !== null" class="-count-time">
      <p id="-dhms" class="-yhack-left -m">
        <br class="-brk" />
        {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
      </p>
    </div>
  </time>
</template>

<style scoped>
.-brk {
  display: none;
}
.-m {
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: -3px 3px #8a14aa;
}
.-ko {
  font-style: italic;
  padding-right: 0.125rem;
  font-weight: 400;
}
@media only screen and (max-width: 767px) {
  .-m {
    font-size: 2rem;
    text-align: center;
  }
}
@media only screen and (max-width: 567px) {
  .-brk {
    display: block;
  }
}
</style>
