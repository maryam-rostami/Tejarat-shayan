<template>
  <main-layout>
    <user-management-component />
  </main-layout>
</template>

<script>
import MainLayout from "../../layout/default.vue";
import userManagementComponent from "whatever/userManagementComponent";

export default {
  name: "userManagement",
  components: { MainLayout, userManagementComponent },
};
</script>

<style></style>
