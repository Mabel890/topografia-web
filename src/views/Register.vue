<template>
  <div>
    <h1>Register</h1>
    <label for="name">Name:</label>
    <input type="name" v-model="name" />
    <label for="email">Email:</label>
    <input type="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" v-model="password" />
    <button @click="register()">Sign up</button>
    <router-link to="/login">Log in</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "Mabel",
      email: "mabelvillada890@gmail.com",
      password: "Fiagfcj",
      id_role: 123,
    };
  },
  methods: {
    click() {
      console.log(`${this.email} ${this.password}`);
    },
    async register() {
      try {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          id_role: this.id_role,
        };
        console.log("Vamos a imprimir el usuario", user);

        const userRegister = await axios.post(
          "http://localhost:3000/api/users/register",
          user
        );
        console.log(
          "Imprimir usuario registrado en la base de datos",
          userRegister
        );

        this.$router.push({
          name: "Login",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>