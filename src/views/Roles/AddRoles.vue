<template>
  <div>
    <v-text-field
      v-model="name"
      name="name"
      label="Name"
      type="text"
    ></v-text-field>
    <v-btn color="primary">Add</v-btn>
  </div>
</template>

<script>
export default {
  name: "Add roles",
  data() {
    return {
      name: "",
    };
  },
};
</script>