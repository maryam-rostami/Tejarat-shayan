<template>
  <div class="q-pa-xl bg-grey-4"><user-management-page /></div>
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
<style lang="scss">
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
tr,
th,
td,
a,
caption,
div,
input {
  font-family: "Vazir";
}
</style>
