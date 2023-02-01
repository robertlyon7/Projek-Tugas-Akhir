import { api } from "src/boot/axios";

const state = {
  listData: {},
};

const mutations = {
  set_list(state, payload) {
    state.listData = payload.data;
  },
};

const actions = {
  getListById({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/list-property/detail/${credential}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  getList({ commit }, credential) {
    return new Promise((resolve, reject) => {
      api
        .get(`/api/list-property`)
        .then((res) => {
          commit("set_list", { data: res.data.data });

          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
  next({ commit, state }) {
    return new Promise((resolve, reject) => {
      api
        .get(`${state.listData.next_page_url}`)
        .then((res) => {
          commit("next", {
            data: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
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
