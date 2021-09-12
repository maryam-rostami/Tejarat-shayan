import { createStore, createLogger } from "vuex";
import userManagement from "./userManagement_Store";

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    userManagement,
  },
});
