<script>
export default {
  data() {
    return {
      showModal: false,
      love: '<3'
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
    }
  }
}

// <div class="-modal-btn">
//   <button @click="showModal = true" class="-btn">
//     <font-awesome-icon :icon="['fas', 'user-astronaut']" class="-astr" />
//   </button>
// </div>
// <transition name="modal-fade">
//   <div class="modal" v-if="showModal">
//     <div class="modal-content">
//       <div class="close" @click="closeModal">
//         <font-awesome-icon :icon="['fas', 'xmark']" class="-xmark" />
//       </div>
//       <h2 class="-yo">You have stumbled into a page or function that does not work.</h2>
//       <p class="-tr">Trust us, we're working on it! {{ love }} YHack Tech Team.</p>
//     </div>
//     <div class="modal-background" @click="closeModal"></div>
//   </div>
// </transition>
</script>

<template>
  <div class="-modal-wrapper">
    <div class="-modal-btn">
      <RouterLink to="/team" class="-btn">
        <font-awesome-icon :icon="['fas', 'user-astronaut']" class="-astr" />
      </RouterLink>
    </div>
  </div>
</template>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.-modal-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
}

.-btn {
  font-size: 3rem;
  color: #fff;
  font-family: 'Nunito Sans', sans-serif;
  transition: 300ms ease;
}

@media (hover: hover) {
  .-btn:hover {
    transform: scale(1.125) translateY(5px);
  }
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  color: #000;
  background-color: #fff;
  padding: 2rem;
  z-index: 999;
}

.close {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.modal-background {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.-xmark {
  font-size: 1.25rem;
  cursor: pointer;
}

.-yo {
  margin-top: 0.5rem;
  font-size: 1.25rem;
}

.-tr {
  font-size: 1.125rem;
  padding-bottom: 1rem;
}

@media only screen and (max-width: 767px) {
  .modal-content {
    margin: 1rem;
  }
}
</style>
