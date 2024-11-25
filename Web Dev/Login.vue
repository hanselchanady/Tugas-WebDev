<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        localStorage.setItem('token', 'fake-jwt-token');
        this.$store.commit('setAuthenticated', true);
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = 'Username atau password salah';
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>