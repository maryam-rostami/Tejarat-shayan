import MainLayout from "../layout/default.vue";
import TablePage from "../pages/Table.vue";

export const routes = [
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
];
