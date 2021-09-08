<template>
  <div class="content-mf1">
    <user-management />
  </div>
</template>

<script>
import UserManagement from "./pages/userManagement/index.vue";
export default {
  name: "App",
  components: {
    UserManagement,
  },
  created: function () {},
};
</script>

<style lang="scss">
body {
  font-size: 14px;
}
th {
  font-size: 14px;
}
p {
  font-size: 14px;
}
.content-mf1 {
  width: 100%;
  display: flex;
}
</style>
