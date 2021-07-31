<template>
  <div>
    <h1>roleServices</h1>
    <!-- <p>{{roles}}</p> -->
    <v-btn color="primary" to="/roles/add">Add</v-btn>
    <table class="table mt-5">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) in roles" :key="i">
          <td>{{ entry.id }}</td>
          <td>{{ entry.name }}</td>
          <td>
            <v-btn color="success" @click="updateRole(entry.id)">Edit</v-btn>
            <v-btn color="error" @click="deleteRole()">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import roleServices from "../../services/Roles/index";

export default {
  name: "Roles",

  data() {
    return {
      roles: [],
    };
  },

  created() {
    this.getRoles();
  },

  methods: {
    async getRoles() {
      try {
        // const roleData = await roleServices.listRoles();
        // this.roles =  roleData.data;
        const { data } = await roleServices.listRoles();
        this.roles = data;
      } catch (error) {
        console.error(error);
      }
    },
    updateRole(id) {
      console.log("Editar role", id);
      this.$router.push({
        name: "UpdateRoles",
        params: {
          rolesId: id,
        },
      });
    },
    deleteRole(id) {
      console.log("Borrar role", id);
    },
  },
};
</script>