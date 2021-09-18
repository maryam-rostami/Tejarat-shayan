import { createApp } from "vue";
import { store } from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import App from "./App.vue";

import "./assets/index.scss";
import "quasar/dist/quasar.rtl.css";

createApp(App).use(store).use(Quasar, quasarUserOptions).mount("#app");
