import { createStore } from "vuex";
import profile from "@/store/module/profile";
import channels from "@/store/module/channels";
import messages from "@/store/module/messages";
import people from "@/store/module/people";
import { COMMIT_SET_STATUS } from "../common/mutation-type";

const store = createStore({
  state() {
    return {
      status: null,
    };
  },
  mutations: {
    [COMMIT_SET_STATUS](state, status) {
      state.status = status;
    },
  },

  modules: {
    profile,
    channels,
    messages,
    people,
  },
});

export default store;
