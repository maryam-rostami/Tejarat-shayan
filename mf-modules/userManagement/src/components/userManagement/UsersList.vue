<template>
  <div class="userList">
    <h3>Users list</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
      <tr v-for="user in userList" :key="user.id">
        <td>{{ user.name }}e</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.address.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import { apiSerivces } from "utilsshayan";

export default {
  data() {
    return {};
  },

  computed: {
    // Get From Store
    userList() {
      return this.$store.getters.userList;
    },
  },

  created() {
    // dispatch from store
    this.$store.dispatch("fetchUserList");
  },
};
</script>
<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
