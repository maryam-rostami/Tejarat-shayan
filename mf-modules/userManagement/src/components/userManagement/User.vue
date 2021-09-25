<template>
  <div class="user-component">
    <div class="user-form q-mb-md">
      <q-card class="my-card" style="overflow: auto">
        <q-card-section>
          <h5>{{ title }}</h5>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="row justify-between">
              <div class="col-md-3 q-pa-xs">
                <q-input
                  filled
                  v-model="name"
                  label="نام *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'فیلد نام اجباری است',
                  ]"
                />
              </div>
              <div class="col-md-3 q-pa-xs">
                <q-input
                  filled
                  type="text"
                  v-model="userName"
                  label="نام کاربری  *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'فیلد نام کاربری اجباری است',
                  ]"
                />
              </div>
              <div class="col-md-3 q-pa-xs">
                <q-input
                  filled
                  v-model="email"
                  label="ایمیل *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'فیلد ایمیل اجباری است',
                  ]"
                />
              </div>
              <div class="col-md-3 q-pa-xs">
                <q-input filled v-model="address" label="آدرس *" lazy-rules />
              </div>
            </div>

            <!-- <div class="col-md-3"><q-toggle v-model="accept" label="I accept the license and terms" /></div> -->

            <div class="float-right q-mb-md">
              <q-btn
                label="ثبت"
                type="submit"
                color="secondary"
                class="text-white"
              />
              <q-btn
                label="پاک کردن"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form> </q-card-section
      ></q-card>
    </div>

    <!-- table quasar  -->
    <t-table
      :columns.sync="columns"
      :rows.sync="rows"
      :visibleColumns="visibleColumns"
      title="لیست کاربران"
      @row-click="rowClick"
    />
    <!-- -------- -->

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
  </div>
</template>

<script>
import tTable from "shayan-ui-framework/src/components/Table.vue";
import { ref } from "vue";
export default {
  name: "user",
  components: { tTable },
  data() {
    return {
      visibleColumns: ["id"],
      columns: [
        { name: "id", label: "id" },
        { name: "lastName", label: "نام" },
        { name: "userName", label: "نام کاربری" },
        { name: "email", label: "ایمیل" },
      ],
      rows: [
        {
          id: "1",
          lastName: "مریم رستمی",
          userName: "m.rostami",
          email: "maryamrostmai598@gmail.com",
        },
        {
          id: "2",
          lastName: "پشمک رستمی",
          userName: "p.rostami",
          email: "pashmak@gmail.com",
        },
      ],
    };
  },
  setup() {
    return {
      confirm: ref(false),
    };
  },
  created() {
    this.$store.dispatch("fetchUserList");
    console.log("created called.");
  },
  methods: {
    rowClick: (evt, row, index) => {
      console.log("selected row ::::", evt, row, index);
    },
  },

  computed: {
    // Get From Store
    userList() {
      return this.$store.getters.userList;
    },
  },
};
</script>

<style>
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
