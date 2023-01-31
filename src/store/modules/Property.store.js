import { api } from "src/boot/axios";

const state = {};

const mutations = {};

const actions = {
  getList({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/list-property`)
        .then((res) => {
          console.log("babi", res.data);

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
