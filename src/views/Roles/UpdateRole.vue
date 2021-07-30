<template>
  <div>
    <h1>Hola este es el Id:</h1>
    <p>{{ paramsRoleId }}</p>
    <p>{{ role }}</p>
    <v-text-field
      v-model="role.name"
      name="name"
      label="Name"
      type="text"
    ></v-text-field>
    <v-btn color="primary" @click="updateRoles()">Update</v-btn>
  </div>
</template>

<script>
import roleServices from "../../services/Roles/index";
export default {
  name: "UpdateRole",
  data() {
    return {
      paramsRoleId: "",
      role: {},
    };
  },
  created() {
    this.paramsRoleId = this.$route.params.rolesId;
    this.getOneRole();
  },
  methods: {
    async getOneRole() {
      try {
        const dataRole = await roleServices.listRole(this.paramsRoleId);
        console.log(dataRole);
        this.role = dataRole.data;
      } catch (error) {
        console.error(error);
      }
    },
    async updateRoles() {
      try {
        await roleServices.updateRoles(this.role.id, this.role.name);
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