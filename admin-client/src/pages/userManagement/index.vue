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

import avatarSvg from "../../../public/images/avatar.svg?inline";
import avatar from "../../../public//images/avatar.png";

export default {
  name: "userManagement",
  data() {
    return {
      avatarSvg,
      avatar,
    };
  },
  components: { MainLayout, UsersList, UserForm },
};
</script>

<style></style>
