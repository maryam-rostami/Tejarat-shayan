<template>
  <!-- <router-view /> -->
  <div class="user-management">
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-teal text-white shadow-2 rounded-borders q-mb-sm"
      align="left"
    >
      <q-tab
        v-for="tab in tabs"
        :name="tab.name"
        :icon="tab.icon"
        :label="tab.label"
        :key="tab.name"
      />
    </q-tabs>

    <q-tab-panels class="bg-transparent" v-model="tab">
      <q-tab-panel
        class="q-pa-none"
        v-for="tab in tabs"
        :name="tab.name"
        :key="tab.name"
      >
        <user-form :title="tab.label" />
        <users-list :title="tab.label" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import UsersList from "./UsersList.vue";
import UserForm from "./UserForm.vue";

export default {
  name: "UserManagementComponent",
  components: {
    UsersList,
    UserForm,
  },
  data() {
    return {
      tabs: [
        { name: "user", icon: "", label: "کاربر" },
        { name: "role", icon: "", label: "نقش" },
        { name: "access", icon: "", label: "دسترسی" },
      ],
    };
  },
  created: function () {},
  setup() {
    return {
      tab: ref("user"),
    };
  },
};
</script>

<style scoped></style>
