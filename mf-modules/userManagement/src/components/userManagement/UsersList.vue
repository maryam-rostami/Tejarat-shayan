<template>
  <div class="userList">
    <q-card class="my-card">
      <q-card-section>
        <h5>لیست کاربران</h5>
        <table>
          <tr>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>آدرس</th>
            <th>عملیات</th>
          </tr>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.name }}e</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.city }}</td>
            <td>
              <q-btn class="q-mr-md" color="deep-orange" label="حذف" />
              <q-btn color="amber" label="ویرایش" />
            </td>
          </tr>
        </table>
        <div class="q-pa-md q-gutter-sm"></div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "UserList",
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
<style scoped>
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
  text-align: right;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
