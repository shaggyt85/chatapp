import {
  COMMIT_UPDATE_USER,
  COMMIT_SET_STATUS,
} from "@/common/mutation-type.js";
import { getUser } from "@/api";
const module = {
  namespaced: true,
  state() {
    return {
      username: "Invitado",
    };
  },
  getters: {
    firstName: (state) => {
      return state.username;
    },
  },
  mutations: {
    [COMMIT_UPDATE_USER](state, username) {
      state.username = username;
    },
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log("update username action!", state.username, username);
      const user = await getUser(1);
      commit(COMMIT_UPDATE_USER, user.username);
      if (state.username) {
        commit(COMMIT_SET_STATUS, "active", { root: true });
        console.log(rootState.status, "rootState");
      }
    },
  },
};

export default module;
