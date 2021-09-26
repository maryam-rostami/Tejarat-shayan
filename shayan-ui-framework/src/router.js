import TablePage from "./pages/Table.vue";
import Dashboard from "./pages/Dashboard.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "/table", component: TablePage },
      // { path: '*', component: Error404 }
    ],
  },
  // { path: '*', component: Error404 }
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
