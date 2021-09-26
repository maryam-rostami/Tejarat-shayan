import { route } from "quasar/wrappers";
import VueRouter from "vue-router";
import routes from "./routes";

export default route(function(/* { store, ssrContext } */) {
  //   const createHistory = process.env.SERVER
  //     ? createMemoryHistory
  //     : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = VueRouter({
    routes,
  });

  return Router;
});
