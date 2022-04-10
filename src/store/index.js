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
    isFilterApplied: false,
    errorMessage: null,
    errorExists: false,
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
    getArticles(state) {
      if (state.isFilterApplied) {
        return state.articles.filter((article) => article.source.name === state.appliedFilter);
      }
      return state.articles;
    },
    getSources(state) {
      return state.sources;
    },
    getLoadingStatus(state) {
      return state.loadingStatus;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
    getErrorExists(state) {
      return state.errorExists;
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
    RESET_FILTER(state) {
      state.isFilterApplied = false;
    },
    APPLY_FILTER(state, source) {
      state.isFilterApplied = true;
      state.appliedFilter = source;
    },
    SET_ERROR_MESSAGE(state, errorMessage) {
      if (errorMessage == null) {
        state.errorExists = false;
      } else {
        state.errorExists = true;
      }
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    fetchHeadlinesFromApi(context) {
      context.commit('SET_LOADING_STATUS', true);
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e',
        )
        .then((response) => {
          context.commit('SET_LOADING_STATUS', false);
          context.commit('SET_HEADLINES', response.data.articles);
        })
        .catch((error) => {
          context.commit('SET_ERROR_MESSAGE', error.response.data.message || error.message);
        });
    },
    fetchSourcesFromApi(context) {
      axios
        .get(
          'https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e',
        )
        .then((response) => {
          context.commit('SET_SOURCES', response.data.sources);
        })
        .catch((error) => {
          context.commit('SET_ERROR_MESSAGE', error.response.data.message || error.message);
        });
    },
    fetchWithError(context) {
      axios
        .get(
          'https://newsapi.org/v2/sources?apiKey',
        )
        .then((response) => {
          context.commit('SET_SOURCES', response.data.sources);
        })
        .catch((error) => {
          context.commit('SET_ERROR_MESSAGE', error.response.data.message || error.message);
        });
    },
    fetchHeadlinesFromLocal(context) {
      context.commit('SET_LOADING_STATUS', true);
      setTimeout(() => {
        context.commit('SET_LOADING_STATUS', false);
        context.commit('SET_HEADLINES', localData.articles);
      }, 2000);
    },
    removeErrors(context) {
      context.commit('SET_ERROR_MESSAGE', null);
    },
    fetchSearchResults(context, searchQuery) {
      context.commit('SET_LOADING_STATUS', true);
      let queryString = '';
      if (searchQuery.length === 0) {
        queryString = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e';
      } else {
        queryString = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&apiKey=099148be22804e849a0c6fe022b7cf5e`;
      }
      axios
        .get(queryString)
        .then((response) => {
          context.commit('SET_LOADING_STATUS', false);
          context.commit('SET_HEADLINES', response.data.articles);
        })
        .catch((error) => {
          context.commit('SET_ERROR_MESSAGE', error.response.data.message || error.message);
        });
    },
  },
});
