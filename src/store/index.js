import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { apiKey, apiKeyNews } from '../../API_KEYS';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey,
    apiKeyNews,
    loader: false,
    dataNews: null,
    newsSection: '',
  },
  mutations: {
    SET_LOADER(state, isLoading) {
      state.loader = isLoading;
      console.log('LOADER MUT: ' + state.loader);
    },
    SET_DATANEWS(state, news) {
      state.dataNews = news;
    },
    SET_NEWS_SECTION(state, newsSection) {
      state.newsSection = newsSection;
      console.log(newsSection);
    },
  },
  actions: {
    changeNewsSection({ commit }, newsSection) {
      commit('SET_NEWS_SECTION', newsSection);
    },
    getNews({ commit, state, dispatch }) {
      dispatch('showLoader', true);
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${state.newsSection}.json?api-key=${state.apiKeyNews}`,
          {
            onDownloadProgress: function(progressEvent) {
              console.log(progressEvent.loaded);
            },
          }
        )
        .then((data) => {
          console.log('Action 1: receiving data!');
          return data.data.results;
        })
        .then((data) => {
          commit('SET_DATANEWS', data);
          dispatch('showLoader', false);
          return data;
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    showLoader({ commit }, isLoading) {
      commit('SET_LOADER', isLoading);
    },
  },
  getters: {
    dataNews(state) {
      return state.dataNews;
    },
    loader(state) {
      return state.loader;
    },
    newsSection(state) {
      return state.newsSection;
    },
  },
  modules: {},
});
