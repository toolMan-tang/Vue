import Vue from 'vue';
import Vuex from 'vuex';

import home from "@/store/moudles/home";

Vue.use(Vuex);

const mutations = {

}

const actions = {

}

const getters = {

}



export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules : {
        home
    }
})