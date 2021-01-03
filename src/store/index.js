import Vue from 'vue';
import Vuex from 'vuex';

import home from "@/store/moudles/home";
import search from "@/store/moudles/search";
import detail from "@/store/moudles/detail";
import cart from "@/store/moudles/cart";
import user from "@/store/moudles/user";

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
        search,
        detail,
        cart,
        user
    }
})