<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      :separator="separator"
      :visible-columns="visibleColumns"
      row-key="id"
      @row-click="selectRow"
    />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "t-table",
  props: ["columns", "rows", "visibleColumns", "title", "row-key"],
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
      this.$emit("row-click", evt, row, index);
    },
  },
  computed: {},
};
</script>

<style></style>
