import Vue from 'vue';
import Vuex from 'vuex';

import home from "@/store/moudles/home";
import search from "@/store/moudles/search";

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
        home,
        search
    }
})