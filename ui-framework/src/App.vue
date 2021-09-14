<template>
  <t-button @click="showNotif" color="primary" label="primary" />
</template>

<script>
import { ref } from "vue";
import tButton from "./components/buttons/Button.vue";
import { useQuasar } from "quasar";

export default {
  name: "LayoutDefault",
  data() {
    return {};
  },

  components: {
    tButton,
  },
  setup() {
    const $q = useQuasar();

    return {
      showNotif() {
        console.log($q);
        $q.notify({
          message: "Jim pinged you.",
          caption: "5 minutes ago",
          color: "secondary",
        });
      },
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
