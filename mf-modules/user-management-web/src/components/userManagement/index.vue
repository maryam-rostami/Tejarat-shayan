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

    <q-tab-panels class="bg-transparent" keep-alive v-model="tab">
      <q-tab-panel
        class="q-pa-none"
        v-for="tab in tabs"
        :name="tab.name"
        :key="tab.name"
      >
        <component v-bind:is="tab.name"></component>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import User from "./User.vue";
import Role from "./Role.vue";
import Access from "./Access.vue";

export default {
  name: "UserManagementComponent",
  components: { User, Access, Role },
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
