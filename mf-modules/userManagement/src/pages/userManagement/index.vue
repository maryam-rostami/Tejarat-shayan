<template>
  <!-- <router-view /> -->
  <div class="content">
    <user-form />
    <users-list />
  </div>
</template>

<script>
import UsersList from "../../components/userManagement/UsersList.vue";
import UserForm from "../../components/userManagement/UserForm.vue";

export default {
  name: "UserManagementPage",
  components: {
    UsersList,
    UserForm,
  },
  created: function () {},
};
</script>
<style scoped>
.content {
  padding: 30px;
  background: #ededed;
}
</style>
