// import MainLayout from "./layout/default.vue";
import App from "./App.vue";
import TablePage from "./pages/Table.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: App,
    children: [
      { path: "table", component: TablePage },

      // { path: '*', component: Error404 }
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
