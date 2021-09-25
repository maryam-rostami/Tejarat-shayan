import MainLayout from "./layout/default.vue";
import TablePage from "./pages/Table.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "table", component: TablePage },

        // { path: '*', component: Error404 }
      ],
    },
    // when a route is not matched
    // { path: '*', component: Error404 }
  ],
});
export default router;
