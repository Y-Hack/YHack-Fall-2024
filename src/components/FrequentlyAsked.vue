<script setup>
import DropDown from './DropDown.vue'
</script>
<template>
  <section id="faqs" class="-faqs-answers">
    <div class="-faqs-title">
      <h2 class="-faqs-declare -txsh">
        FAQs
      </h2>
    </div>
    <div class="-faqs-dd">
      <DropDown />
    </div>
  </section>
</template>
<style scoped>
.-faqs-answers {
  min-height: 100vh;
  padding: 4rem;
}
.-faqs-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.-faqs-declare {
  font-size: 3rem;
  text-shadow: -3px 3px #8a14aa
}

.-b {
  color: #02fffc;
}

.-y {
  color: #fefc00;
}

.-p {
  color: #fc00ff;
}

.-u {
  text-decoration: underline;
}

@media only screen and (max-width: 767px) {
  .-faqs-declare {
    font-size: 2.5rem;
  }
  .-faqs-answers {
    padding: 4rem 2rem;
  }
}

@media only screen and (max-width: 567px) {
  .-faqs-answers {
    padding: 4rem 1.5rem;
  }
}
</style>