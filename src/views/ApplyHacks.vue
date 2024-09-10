<script>
// THIS IS A DUMMY, DELETE IN FUTURE
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      err: "Registration is not open at this time."
    }
  },
  methods: {
    login() {
      if (this.username === 'test' && this.password === 'test') {
        console.log('Login Successful')
      } else {
        this.error = 'Authentication is currently disabled'
      }
    }
  }
}
</script>

<template>
  <div id="-application-x" class="_apply_">
    <div class="login-form">
      <h2>Login to YHack!</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <!-- <p v-if="error" class="error-msg">{{ error }}</p> -->
      <p class="error-msg -closed-reg">{{ err }}</p>
    </div>
    <div class="-go-back">
      <RouterLink to="/" class="-back">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="-bx" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
._apply_ {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/nav.png") no-repeat scroll center/cover;
}

.login-form {
  width: 400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 5px;
  background-color: #fff;
}

.login-form h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 1.125rem;
  margin-bottom: 5px;
  color: #000;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: 'Nunito Sans', sans-serif;
}

button {
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  padding: 0.625rem 1.75rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  opacity: 0.25;
  font-family: 'Pixel', sans-serif;
}

.error-msg {
  color: red;
  margin-top: 10px;
  font-size: 1rem;
}

.-go-back {
  position: fixed;
  top: 3rem;
  right: 3rem;
}

.-bx {
  font-size: 2.25rem;
  color: #fff;
  transition: 300ms ease;
}

.-closed-reg {
  margin-top: 2rem;
  text-align: center;
}

@media (hover: hover) {
  .-bx:hover {
    transform: translateX(5px);
  }
}
</style>