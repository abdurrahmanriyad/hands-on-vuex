import Vuex from 'vuex';
import Vue from 'vue';

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        count: (state) => {
          return state.count;
        }
    }
})