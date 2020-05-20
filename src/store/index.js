import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { weather } from '@/store/modules/weather';
import { news } from '@/store/modules/news';
import { apiKey, apiKeyNews } from '../../API_KEYS';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey,
    apiKeyNews,
    loader: false,
  },
  mutations: {
    SET_LOADER(state, isLoading) {
      state.loader = isLoading;
    },
  },
  actions: {
    showLoader({ commit }, isLoading) {
      commit('SET_LOADER', isLoading);
    },
  },
  getters: {
    loader(state) {
      return state.loader;
    },
  },
  modules: {
    weather,
    news,
  },
});
