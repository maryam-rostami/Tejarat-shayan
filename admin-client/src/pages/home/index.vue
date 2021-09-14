<template>
  <main-layout>
    <users-list />
  </main-layout>
</template>

<script>
import MainLayout from "../../layout/default.vue";
import UsersList from "whatever/UsersList";
export default {
  name: "Home",
  components: { MainLayout, UsersList },
};
</script>

<style></style>
