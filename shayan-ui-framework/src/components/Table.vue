<template>
  <q-table
    :props="props"
    :title="title"
    :rows="rows"
    :columns="columns"
    :separator="separator"
    row-key="id"
    @row-click="selectRow"
  >
    <!-- actions cell  -->
    <template v-slot:body-cell-actions="props" v-if="actions !== null">
      <q-td :props="props">
        <q-btn
          class="q-mr-sm"
          v-for="action in actions"
          :key="action.name"
          :label="action.label"
          :color="action.color"
          @click="action.event(props)"
        ></q-btn>
      </q-td>
    </template>
  </q-table>
</template>
<script>
import { ref } from "vue";

export default {
  name: "TTable",
  props: ["columns", "rows", "title", "row-key", "actions"],
  data() {
    return {};
  },
  setup() {
    const separator = ref("cell");
    return {
      separator,
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
    accessRow(props) {
      this.$emit("access-click", props);
    },
    editRow(props) {
      this.$emit("edit-click", props);
    },
    deleteRow(props) {
      this.$emit("delete-click", props);
    },
  },
};
</script>

<style></style>
