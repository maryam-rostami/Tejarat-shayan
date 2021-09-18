<template>
  <user-management-page />
</template>

<script>
import { ref } from "vue";
import UserManagementPage from "./pages/userManagement/index.vue";
import { useQuasar } from "quasar";

export default {
  components: {
    UserManagementPage,
  },

  setup() {
    const $q = useQuasar();
    console.log("lan", $q.lang.getLocale());
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
