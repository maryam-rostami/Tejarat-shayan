import { createStore, createLogger } from "vuex";
import userStore from "./userStore";

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    userStore,
  },
});
