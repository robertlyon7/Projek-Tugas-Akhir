import { api } from "src/boot/axios";

const state = {
  auth: null,
};

const mutations = {
  set_auth(state, payload) {
    state.auth = payload.auth;
  },
};

const actions = {
  favorite({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/list-property/favorite`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};

const getters = { auth: (state) => state.auth };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
