/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    timeEntries: [],
    totalTime: 0,
  },
  mutations: {
    timeUpdate(state, timeEntry) {
      state.totalTime += parseFloat(timeEntry.totalTime);
      state.timeEntries.push(timeEntry);
    },
    deleteTime(state, timeEntry) {
      const index = state.timeEntries.indexOf(timeEntry);
      state.timeEntries.splice(index, 1);
      state.totalTime -= parseFloat(timeEntry.totalTime);
    },
  },
});

export default store;
