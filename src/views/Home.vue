<template>
  <div class="home">
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = localStorage.getItem("userApp");
  },
};
</script>
