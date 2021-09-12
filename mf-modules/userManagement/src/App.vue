<template>
  <div class="content-mf1">
    <loading />
    <user-management />
  </div>
</template>

<script>
import Loading from "./components/shares/loading.vue";
import UserManagement from "./pages/userManagement/index.vue";
export default {
  name: "App",
  components: {
    UserManagement,
    Loading,
  },
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
