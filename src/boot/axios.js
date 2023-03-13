// src/boot/axios.js

import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "http://api.seele.my.id/" });

  // api = http://api.seele.my.id/

export default boot(({ app, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  const token = store.getters["Auth/auth"];
  if (token != null) {
    api.defaults.headers.common.Accept = "application/json";
    api.defaults.headers.common.Authorization = `${token.data.token_type} ${token.data.access_token}`;
  }
});

export { api };
