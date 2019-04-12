import Vuex from 'vuex';
import Vue from 'vue';
import testModule from './modules/test'

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        testModule
    }
})