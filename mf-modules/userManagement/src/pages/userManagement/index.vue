<template>
  <!-- <router-view /> -->
  <user-management-component />
</template>

<script>
import UserManagementComponent from "../../components/userManagement/index.vue";

export default {
  name: "UserManagementPage",
  components: { UserManagementComponent },
  created: function () {},
};
</script>
<style scoped></style>
