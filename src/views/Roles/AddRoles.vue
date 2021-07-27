<template>
  <div>
    <v-text-field
      v-model="name"
      name="name"
      label="Name"
      type="text"
    ></v-text-field>
    <v-btn color="primary" @click="createRole">Add</v-btn>
  </div>
</template>

<script>
import roleServices from "../../services/Roles/index";
export default {
  name: "Add-roles",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async createRole() {
      try {
        const roleName = {
          name: this.name,
        };
        console.log("Vamos a imprimir el nombre del role:", roleName);

        const roleCreation = await roleServices.serviceCreateRole(roleName);
        console.log("Imprimir role creado", roleCreation);

        this.$router.push({
          name: "Roles",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>