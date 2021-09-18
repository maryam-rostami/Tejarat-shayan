<template>
  <!-- <router-view /> -->
  <div class="content">
    <q-card class="my-card">
      <q-card-section>
        <user-form />
        <users-list />
      </q-card-section>
    </q-card>
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
