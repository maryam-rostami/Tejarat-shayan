<template>
  <t-table
    :columns.sync="columns"
    :rows.sync="rows"
    title="لیست کاربران"
    @edit-click="editRow"
    @delete-click="deleteRow"
    @access-click="accessRow"
    :actions="actions"
  />
</template>

<script>
import tTable from "../components/Table.vue";

export default {
  name: "Table",
  components: { tTable },
  data() {
    return {
      columns: [
        {
          name: "id",
          classes: "hidden",
          headerClasses: "hidden",
        },
        { name: "lastName", label: "نام" },
        { name: "userName", label: "نام کاربری" },
        { name: "email", label: "ایمیل" },
        { name: "actions", align: "center", label: "عملیات" },
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
      actions: [
        {
          name: "access",
          label: "دسترسی",
          color: "secondary",
          event: this.accessRow,
        },
        { name: "edit", label: "ویرایش", color: "amber", event: this.editRow },
        { name: "delete", label: "حذف", color: "red", event: this.deleteRow },
      ],
    };
  },
  created() {
    console.log("created called.");
  },
  methods: {
    selectedRow: (evt, row, index) => {
      console.log("selected row ::::", evt, row.id, index);
    },
    accessRow(props) {
      console.log("access row ::::", props.row);
    },
    editRow(props) {
      console.log("Edit row ::::", props.row);
    },
    deleteRow(props) {
      console.log("Delete row ::::", props.row.id);
    },
  },
};
</script>
<style lang="scss"></style>
