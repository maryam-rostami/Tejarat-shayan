<template>
  <div class="userList">
    <q-card class="my-card">
      <q-card-section>
        <h5>{{ title }}</h5>
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
              <q-btn
                class="q-mr-md"
                color="red"
                label="حذف"
                @click="confirm = true"
              />
              <q-btn color="amber" label="ویرایش" />
            </td>
          </tr>
        </table>
        <div class="q-pa-md q-gutter-sm"></div>
      </q-card-section>
    </q-card>

    <!-- confirm message  -->
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm">آیا کاربر مورد نظر حذف شود ؟</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="حذف" color="red" v-close-popup />
          <q-btn flat label="بستن" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "UserList",
  props: ["title"],
  setup() {
    return {
      confirm: ref(false),
    };
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
