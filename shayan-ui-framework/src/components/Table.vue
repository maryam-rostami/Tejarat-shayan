<template>
  <div class="q-pa-md">
    <q-table
      title="لیست کاربران"
      :rows="rows"
      :columns="columns"
      :separator="separator"
      :visible-columns="visibleColumns"
      row-key="name"
      @row-click="selectRow"
    />
  </div>
</template>
<script>
import { ref } from "vue";
// const columns =
// [
//   {
//     name: "name",
//     required: true,
//     label: "Dessert (100g serving)",
//     align: "left",
//     field: (row) => row.name,
//     format: (val) => `${val}`,
//     sortable: true,
//   },
// ];

// const rows = [
//   {
//     name: "Frozen Yogurt",
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0,
//     sodium: 87,
//     calcium: "14%",
//     iron: "1%",
//   }
// ];

export default {
  name: "t-table",
  props: ["columns", "rows", "visibleColumns"],
  data() {
    return {};
  },
  setup() {
    return {
      separator: ref("cell"),
    };
  },
  created() {
    this.columns.forEach((element) => {
      element["required"] = true;
      element["align"] = "center";
      element["field"] = element.name;
      element["format"] = (val) => `${val}`;
      element["sortable"] = true;
    });

    // this.$emit("update:columns", this.columns);
  },
  methods: {
    selectRow(evt, row, index) {
      console.log(row.id);
    },
  },
  computed: {},
};
</script>

<style></style>
