import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import localData from '../assets/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    history: [],
    sources: [],
    loadingStatus: false,
    appliedFilter: '',
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
    getArticles(state) {
      return state.articles;
    },
    getSources(state) {
      return state.sources;
    },
    getLoadingStatus(state) {
      return state.loadingStatus;
    },
  },
  mutations: {
    ADD_TO_HISTORY(state, article) {
      const newArticle = {
        id: article.id,
        title: article.title,
      };
      if (state.history.length < 11) {
        const found = state.history.find((item) => item.id === newArticle.id);
        if (!found) {
          state.history.push(newArticle);
        }
      }
    },
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_HEADLINES(state, articles) {
      state.articles = articles;
    },
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
    SET_TITLE(state, id, title) {
      state.articles[id].title = title;
    },
    RESET_FILTER() {

    },
    APPLY_FILTER() {

    },
  },
  actions: {
    fetchHeadlinesFromApi(context) {
      context.commit('SET_LOADING_STATUS', true);
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=841d612e1f4c415780982ddf90eecdfc',
        )
        .then((response) => {
          context.commit('SET_LOADING_STATUS', false);
          context.commit('SET_HEADLINES', response.data.articles);
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
    fetchSourcesFromApi(context) {
      axios
        .get(
          'https://newsapi.org/v2/sources?apiKey=841d612e1f4c415780982ddf90eecdfc',
        )
        .then((response) => {
          context.commit('SET_SOURCES', response.data.sources);
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
    fetchHeadlinesFromLocal(context) {
      context.commit('SET_LOADING_STATUS', true);
      setTimeout(() => {
        context.commit('SET_LOADING_STATUS', false);
        context.commit('SET_HEADLINES', localData.articles);
      }, 2000);
    },
  },
});
