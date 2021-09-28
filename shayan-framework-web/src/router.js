import Table from "./pages/Table.vue";
import Modal from "./pages/Modal.vue";

import Dashboard from "./pages/Dashboard.vue";
import LoginPage from "./pages/Login.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      { path: "/table", component: Table },
      { path: "/modal", component: Modal },
      // { path: '*', component: Error404 }
    ],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  // { path: '*', component: Error404 }
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
