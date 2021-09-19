import "./styles/quasar.scss";
import lang from "quasar/lang/fa.js";
import "@quasar/extras/material-icons/material-icons.css";
import { Notify } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {},
  },
  plugins: {
    Notify,
  },
  lang: lang,
};
