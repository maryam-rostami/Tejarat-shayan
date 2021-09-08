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
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}e</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.address.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import apiSerivces from "../../Utils/apiService";

export default {
  name: "UserList",
  data() {
    return {
      users: null,
    };
  },
  created: function () {
    apiSerivces
      .path("users")
      .method("GET")
      .request(
        (res) => {
          console.log("res", res);
          this.users = res;
        },
        () => {
          console.log("err");
        }
      );
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
