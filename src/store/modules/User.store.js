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
  register({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/register`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  login({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/login`, credential)
        .then((res) => {
          commit("set_auth", {
            auth: res.data,
          });
          api.defaults.headers.common.Accept = "application/json";
          api.defaults.headers.common.Authorization =
            "Bearer" + " " + state.auth.token;
          console.log("ini daya yang ada di auth", state.auth);
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
