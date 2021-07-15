<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="click()">Sign up</button>
    <router-link to="/login">Log in</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    click() {
      console.log(`${this.email} ${this.password}`);
    },
  },
};
</script>

<style>
</style>