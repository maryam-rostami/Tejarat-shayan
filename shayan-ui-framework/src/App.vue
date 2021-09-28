<template>
  <MainLayout />
</template>

<script>
import MainLayout from "./layout/default.vue";
export default {
  name: "App",
  components: { MainLayout },
  data() {
    return {
      // isLoged: false,
    };
  },
  // mounted() {
  //   this.isLoged === true
  //     ? this.$router.replace("/dashboard")
  //     : this.$router.replace("/login");
  // },
};
</script>

<style lang="scss"></style>
