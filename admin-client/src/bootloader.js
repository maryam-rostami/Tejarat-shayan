import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.scss";
import { store } from "whatever/Store";
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";
createApp(App).use(store).use(Quasar, { config: {} }).mount("#app");
