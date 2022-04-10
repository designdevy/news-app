import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import localData from '../assets/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    history: [],
    loadingStatus: 'notLoading',
  },
  getters: {
    getHistory(state) {
      return state.history;
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
    SET_TITLE(state, id, title) {
      state.articles[id].title = title;
    },
  },
  actions: {
    fetchHeadlinesFromApi(context) {
      context.commit('SET_LOADING_STATUS', 'loading');
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=841d612e1f4c415780982ddf90eecdfc',
        )
        .then((response) => {
          context.commit('SET_LOADING_STATUS', 'notLoading');
          context.commit('SET_HEADLINES', response.data.articles);
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
    fetchHeadlinesFromLocal(context) {
      context.commit('SET_LOADING_STATUS', 'loading');
      setTimeout(() => {
        context.commit('SET_LOADING_STATUS', 'notLoading');
        context.commit('SET_HEADLINES', localData.articles);
      }, 2000);
    },
  },
});
