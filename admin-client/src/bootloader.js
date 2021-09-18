import { createApp } from "vue";
import { store } from "whatever/Store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import App from "./App.vue";

import "quasar/dist/quasar.rtl.css";
import "@quasar/extras/material-icons/material-icons.css";

createApp(App).use(store).use(Quasar, quasarUserOptions).mount("#app");
