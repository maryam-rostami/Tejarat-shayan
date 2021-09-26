import lang from "quasar/lang/fa";
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
  components: [
    "QLayout",
    "QLayoutHeader",
    "QLayoutDrawer",
    "QPageContainer",
    "QPage",
    "QToolbar",
    "QToolbarTitle",
    "QBtn",
    "QIcon",
    "QList",
    "QListHeader",
    "QItem",
    "QItemMain",
    "QItemSide",
    "QField",
    "QInput",
    "LocalStorage",
  ],
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
