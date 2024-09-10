<script>
export default {
  data() {
    return {
      down: true,
      faqs: [
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
          a: 'Teams will be present their work to judges!',
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
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.faqs.forEach((faq, i) => {
        if (i !== index) {
          faq.open = false
        }
      })

      this.faqs[index].open = !this.faqs[index].open
    }
  }
}
</script>
<template>
  <div class="_dropdown_">
    <div v-for="(faq, index) in faqs" :key="index" class="-faqs-x">
      <div
        @click="
          toggleFAQ(index);
          down = !down
        "
        class="faq-item"
      >
        <div class="-faq-boxhead">
          <font-awesome-icon
            :icon="faq.open ? ['fas', 'caret-up'] : ['fas', 'caret-down']"
            class="-caret-x"
          />
          <h3 class="-q -txsh">{{ faq.q }}</h3>
        </div>
        <div v-if="faq.open" class="-a-x">
          <p class="-a -txsh">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
._dropdown_ {
  padding: 1.5rem 2rem 2rem 2rem;
  margin: 0 auto;
  max-width: 992px;
}
.-faq-boxhead {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}
.faq-item {
  cursor: pointer;
  padding: 0.5rem;
  transition: 250ms ease;
}
.-caret-x {
  font-size: 1.375rem;
  padding-bottom: 0.25rem;
}
@media (hover: hover) {
  .faq-item:hover {
    color: #fff;
    background-color: #420453;
  }
}
.-q {
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0.25rem;
}
.-a {
  font-size: 1.25rem;
  font-weight: 300;
  margin-left: 2.25rem;
  padding: 0.125rem;
}

@media only screen and (max-width: 767px) {
  ._dropdown_ {
    padding: 1.5rem 0;
  }

  .-q {
    font-size: 1.25rem;
  }
}
</style>