<template>
  <div class="admin-client">Admin client
    <br><br>
    <users-list />

  </div>

</template>

<script>
import UsersList from "whatever/UsersList";
export default {
  name: "App",
 components: { UsersList },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
