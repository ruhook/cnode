import Vuex from 'vuex';
import Vue from 'vue';

import { TEST } from './mutationApi';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        addCount(state) {
            return "getters: " + state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        [TEST](state, obj) {
            state.count = obj['count']
        }
    }
})

export default store;