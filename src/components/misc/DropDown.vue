<script setup>
import { ref } from 'vue'

const down = ref(true)

const faqs = ref([
  {
    q: 'Do I need to have hackathon experience?',
    a: "No. We accept people of all skill levels and YHack is a great event for many who haven't participated in a hackathon.",
    open: false
  },
  {
    q: 'Can I register with a team?',
    a: "Team formation will happen after registration. You should get an email a few days before your hackathon. In case you don't have a team, we'll have formation before the hackathon starts!",
    open: false
  },
  {
    q: 'What if I have no experience at all?',
    a: "You've found the perfect place and time to learn! Whether you're a designer, coder, tinkerer or somewhere in-between, there will be dedicated events and mentors to ease your way through your YHack Mini experience.",
    open: false
  },
  {
    q: 'How do teams work?',
    a: 'After individual reservation, we will send out an email regarding team registration. Teams can be of size 2-4.',
    open: false
  },
  {
    q: 'How much does it cost to attend?',
    a: 'Zilch, zero, nada, free!',
    open: false
  },
  {
    q: 'How will judging work?',
    a: 'Teams will present their work to judges!',
    open: false
  },
  {
    q: 'Will there be swag?',
    a: 'Swag will be handed out to all participants!',
    open: false
  },
  {
    q: 'What about hardware hacks?',
    a: 'Unfortunately, this hackathon will not have a hardware track.',
    open: false
  },
  {
    q: 'What if I have other questions?',
    a: "Email us at organizers@yhack.org, and we'll respond as soon as we can!",
    open: false
  }
])

const toggleFAQ = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i !== index) faq.open = false
  })

  faqs.value[index].open = !faqs.value[index].open
  down.value = !down.value
}
</script>

<template>
  <div class="dropdown">
    <div v-for="(faq, index) in faqs" :key="index" class="faqs">
      <div @click="toggleFAQ(index)" class="faq-item">
        <div class="faqbox">
          <font-awesome-icon
            :icon="faq.open ? ['fas', 'caret-up'] : ['fas', 'caret-down']"
            class="caret"
          />
          <h3 class="question">{{ faq.q }}</h3>
        </div>
        <div v-if="faq.open" class="answerwrapper">
          <p class="answer">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}
.faqs {
  transition: 250ms;
}
.faq-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
}
.faqbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
}
.question,
.caret {
  font-size: 1.75rem;
  font-weight: 400;
}
.answerwrapper {
  padding: 1rem 0 0 2.5rem;
}
.answer {
  font-size: 1.375rem;
  font-weight: 300;
}
@media (hover: hover) {
  .faqs:hover {
    background-color: #530b67;
  }
}
</style>
