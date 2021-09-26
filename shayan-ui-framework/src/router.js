// import MainLayout from "./layout/default.vue";
import App from "./App.vue";
import TablePage from "./pages/Table.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/table", component: TablePage }];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
