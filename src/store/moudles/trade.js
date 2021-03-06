import { reqTradeInfo } from '@/api';

const state = {
    tradeInfo: {}
}

const mutations = {
    GETTRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo;
    }
}

const actions = {
    async getTradeInfo({ commit }) {
        let result = await reqTradeInfo();
        console.log(result.data);
        if (result.code == 200) {
            commit('GETTRADEINFO', result.data);
        }
    }
}

const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state) {
        return state.tradeInfo.userAddressList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}