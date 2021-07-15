<template>
  <div>
    <h1>Login</h1>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="login()">Log in</button>
    <router-link to="/register">Sign up</router-link>
    <p>{{ getData }}</p>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      getData: {},
    };
  },
  methods: {
    async login() {
      // console.log(`${this.email} ${this.password}`)
      const dataGet = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(dataGet);
      this.getData = dataGet.data;
    },
  },
};
</script>

<style>
</style>