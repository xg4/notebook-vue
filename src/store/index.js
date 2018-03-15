import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const state = {
    notes: [],
    note_id: ''
};

export default new Vuex.Store({
    strict: debug,
    state,
    getters,
    actions,
    mutations
});
