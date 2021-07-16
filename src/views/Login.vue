<template>
  <div>
    <h1>Login</h1>
    <label for="email">Email:</label>
    <input type="email" v-model="email" />
    <label for="password">Password:</label>
    <input type="password" v-model="password" />
    <button @click="login()">Log in</button>
    <router-link to="/register">Sign up</router-link>
    <p v-if="error === true">{{ errorMessage }}</p>
    <!-- <p>{{ getData }}</p> -->
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Login",
  data() {
    return {
      email: "mabelvillada890@gmail.com",
      password: "Fiagfcj",
      error: false,
      errorMessage: "",
      //getData: {},
    };
  },
  methods: {
    async login() {
      try {
        const user = {
          email: this.email,
          password: this.password,
        };
        console.log("Vamos a imprimir el usuario", user);

        const userLogin = await axios.post(
          "http://localhost:3000/api/users/login",
          user
        );

        console.log(
          "Imprimir usuario registrado en la base de datos",
          userLogin
        );

        this.error = false;
        this.errorMessage = "";

        localStorage.setItem("userApp", JSON.stringify(userLogin.data));

        this.$router.push({
          name: "Home",
        });

        // console.log(`${this.email} ${this.password}`)
        /*
        const dataGet = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(dataGet);
        this.getData = dataGet.data;
        */
      } catch (error) {
        this.error = true;
        this.errorMessage = error.response.data.message;
        console.error(error);
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style>
</style>