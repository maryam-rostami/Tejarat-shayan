import "./styles/quasar.scss";
import lang from "quasar/lang/fa";
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

// cssAddon: true,
// extras: [
//   'ionicons-v4',
//   'material-icons',
//   'material-icons-outlined',
//   'material-icons-round',
//   'material-icons-sharp',
//   'mdi-v3',
//   'eva-icons',
//   'fontawesome-v5',
//   'themify'
// ]
