<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="name"
                name="name"
                label="Name"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="email"
                name="email"
                label="Email"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                id="password"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register()">Sign up</v-btn>
            <v-btn color="primary" to="/login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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