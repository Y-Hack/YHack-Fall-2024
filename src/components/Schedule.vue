<script setup>
const schedule = [
  {
    date: '3/30',
    events: [
      { time: '8:00 AM', description: 'breakfast', color: 'orange' },
      { time: '10:00 AM', description: 'opening ceremony', color: 'lightblue' },
      { time: '11:00 AM', description: 'hacking starts', color: 'green' },
      { time: '1:00 PM', description: 'lunch', color: 'orange' },
      { time: '6:00 PM', description: 'dinner', color: 'orange' },
      { time: '10:00 PM', description: 'snacks', color: 'orange' },
    ]
  },
  {
    date: '3/31',
    events: [
      { time: '12:00 PM', description: 'hacking stops', color: 'green' },
      { time: '12:00 PM', description: 'brunch', color: 'orange' },
      { time: '1:00 PM', description: 'judging', color: 'green' },
      { time: '5:00 PM', description: 'closing ceremony', color: 'lightblue' },
    ]
  },
];
</script>

<template>
<section id="schedule" class="-schedule">
		<div class="-schedule-h">
			<h1 class="-schedule-title glitch -txsh" data-text="SCHEDULE">SCHEDULE</h1>
		</div>
  <div class="schedule-container">
    <div class="schedule-date" v-for="(day, index) in schedule" :key="index">
      <h2 class="schedule-heading">{{ day.date }}</h2>
      <div class="schedule-events">
        <div 
          class="event" 
          v-for="(event, index) in day.events" 
          :key="index"
          :style="{ backgroundColor: event.color }"
        >
          <span class="event-time">{{ event.time }}</span>
          <span class="event-description">{{ event.description }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.-schedule {
  min-height: 100vh;
  padding: 4rem 0;

}
.-scheudle-h {
	margin-bottom: 3rem;
}
.glitch {
	position: relative;
	font-size: 3rem;
	color: white;
	text-align: center;
  width: 10rem;
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

.schedule-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.schedule-date {
  flex: 1; 
  margin: 0 1rem;
  min-width: 300px;
}

.schedule-heading {
  text-align: center;
  font-size: 2rem; 
  color: #fff;
  margin-bottom: 1rem;
}

.schedule-events {
  border: 1px solid #ddd;
  padding: 1rem;
}

.event {
  display: flex;
  justify-content: space-between;
  padding: 1rem; 
  margin-bottom: 1rem; 
  border-bottom: 1px solid #eee; 
  transition: background-color 0.3s;
}

.event-time {
  font-weight: bold;
  font-size: 1.2rem; 
}

.event-description {
  font-style: italic;
  font-size: 1.1rem;
}

@media only screen and (max-width: 600px) {
  .schedule-container {
    flex-direction: column;
  }

  .schedule-date {
    width: 95%;
    margin-bottom: 2rem; 
  }
}
</style>
