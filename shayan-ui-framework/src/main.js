import { createApp } from "vue";
import { Quasar } from "quasar";
import { router } from "./router";

import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";

import "./assets/sass/index.scss";
import "quasar/dist/quasar.rtl.css";
import "@quasar/extras/material-icons/material-icons.css";

createApp(App)
  .use(router)
  .use(Quasar, quasarUserOptions)
  .mount("#app");
