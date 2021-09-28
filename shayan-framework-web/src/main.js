import { createApp } from "vue";
import { Quasar } from "quasar";

import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import router from "./router";

import "./assets/sass/index.scss";
import "quasar/dist/quasar.rtl.css";
import "@quasar/extras/material-icons/material-icons.css";

const app = createApp(App);
app.use(router);
app.use(Quasar, quasarUserOptions);
app.mount("#app");
