<template>
  <t-table
    :columns.sync="columns"
    :rows.sync="rows"
    :visibleColumns="visibleColumns"
  />
</template>

<script>
import tTable from "./components/Table.vue";

export default {
  name: "App",
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
  created() {
    console.log("created called.");
  },
};
</script>
<style lang="scss">
body {
  padding: 30px;
  margin: 0;
  display: flex;
}
</style>
