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
    >
      <!-- actions cell  -->
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="primary"
            @click="editRow(props)"
            icon="edit"
          ></q-btn>
          <q-btn
            dense
            round
            flat
            color="red"
            @click="deleteRow(props)"
            icon="delete"
          ></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script>
import { ref, computed } from "vue";

export default {
  name: "t-table",
  props: ["columns", "rows", "visibleColumns", "title", "row-key"],
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
