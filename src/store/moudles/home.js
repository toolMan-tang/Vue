import {categoryList,bannersList,floorsList,commendsList} from '@/api';

const state = {
    categoryLists : [],
    bannerList : [],
    floors : [],
    commends : []
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state,data){
        state.categoryLists = data.splice(0, 15)
    },
    RECEIVE_BANNER_LIST(state,data){
        state.bannerList = data;
    },
    RECEIVE_FLOORS_LIST(state,data){
        state.floors = data;
    },
    RECEIVE_COMMENDS_LIST(state,data){
        state.commends = data;
    },
}

const actions = {
    async getCategoryList({commit}){
        const result = await categoryList();
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code===200) {
          const data = result.data;
          commit('RECEIVE_CATEGORY_LIST',data)
        }
    },
    async getBannerList ({commit}){
        const result = await bannersList();
        if(result.code == 200){
            const data = result.data;
            commit('RECEIVE_BANNER_LIST',data)
        }
    },

    async getFloors ({commit}) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await floorsList()
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code===200) {
          const floors = result.data;
          commit('RECEIVE_FLOORS_LIST', floors)
        }
      },

    async getRecommends ({commit}) {
        const result = await commendsList();
        if (result.code===200) {
            const floors = result.data;
            commit('RECEIVE_COMMENDS_LIST', floors)
        }
    }
    
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
  }