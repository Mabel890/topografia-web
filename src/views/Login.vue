<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
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
            <v-btn color="primary" @click="login()">Login</v-btn>
            <v-btn color="primary" to="/register">Sign up</v-btn>
            <p v-if="error === true">{{ errorMessage }}</p>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <p>{{ getData }}</p>  -->
</template>

<script>
import userServices from '../services/Users/index';
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

        const userLogin = await userServices.login(user);

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

