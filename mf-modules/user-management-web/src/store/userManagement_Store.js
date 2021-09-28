import { apiSerivces } from "shayan-utils";

const userManagement = {
  state: {
    userList: [],
    isLoading: false,
  },
  getters: {
    userList: (state) => {
      return state.userList;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
  },
  mutations: {
    SET_USERLIST(state, userList) {
      state.userList = userList;
    },
    SET_ISLOADING(state, loadingStatus) {
      state.isLoading = loadingStatus;
    },
  },
  actions: {
    async fetchUserList({ commit }) {
      try {
        console.log("apiSerivces", apiSerivces);
        commit("SET_ISLOADING", true);
        await apiSerivces
          .baseUrl("https://jsonplaceholder.typicode.com/")
          .path("users")
          .method("GET")
          .request(
            (res) => {
              commit("SET_USERLIST", res);
              commit("SET_ISLOADING", false);
            },
            () => {
              commit("SET_ISLOADING", false);
            }
          );
      } catch (error) {
        console.log(error);
        commit("SET_ISLOADING", false);
      }
    },
  },
};

export default userManagement;
