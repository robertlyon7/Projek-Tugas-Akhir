import { api } from "src/boot/axios";

const state = {};

const mutations = {
  console(state) {
    console.log("hao");
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
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },

};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
