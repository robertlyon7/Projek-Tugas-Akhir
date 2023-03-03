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
  readAll({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/list-property`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  create({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/list-property/create`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  read({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/api/read`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  update({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/list-property/update/{id}`, credential)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  delete({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .post(`/list-property/destroy/{id}`, credential)
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
