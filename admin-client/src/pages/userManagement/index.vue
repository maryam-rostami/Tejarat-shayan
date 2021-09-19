<template>
  <main-layout>
    <user-form />
    <users-list />
  </main-layout>
</template>

<script>
import MainLayout from "../../layout/default.vue";
import UsersList from "whatever/UsersList";
import UserForm from "whatever/UserForm";

export default {
  name: "userManagement",
  components: { MainLayout, UsersList, UserForm },
};
</script>

<style></style>
