<template>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  created() {
    this.$store.dispatch("User/init");
    var data = localStorage.getItem("auth");
    axios.defaults.headers.common["Authorization"] = `Bearer ${data}`;
  },
};
</script>
