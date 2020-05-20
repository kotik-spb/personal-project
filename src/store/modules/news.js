import axios from 'axios';

export const news = {
  namespaced: true,
  state: {
    dataNews: null,
    newsSection: '',
  },
  mutations: {
    SET_DATANEWS(state, news) {
      state.dataNews = news;
    },
    SET_NEWS_SECTION(state, newsSection) {
      state.newsSection = newsSection;
    },
  },
  actions: {
    changeNewsSection({ commit }, newsSection) {
      commit('SET_NEWS_SECTION', newsSection);
    },
    getNews({ commit, state, dispatch, rootState }) {
      dispatch('showLoader', true, { root: true });
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${state.newsSection}.json?api-key=${rootState.apiKeyNews}`
        )
        .then((data) => {
          console.log('Action 1: receiving data!');
          return data.data.results;
        })
        .then((data) => {
          commit('SET_DATANEWS', data);
          dispatch('showLoader', false, { root: true });
          return data;
        })
        .catch((err) => {
          console.log(err);
          dispatch('showLoader', false, { root: true });
        });
    },
  },
  getters: {
    newsSection(state) {
      return state.newsSection;
    },
  },
};
