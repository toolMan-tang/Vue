import {categoryList} from '@/api';

const state = {
    categoryLists : []
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state,data){
        state.categoryLists = data.splice(0, 15)
    }
}

const actions = {
    async getCategoryList({commit}){
        const result = await categoryList();
        // 如果请求成功了, 得到数据提交给mutation
        if (result.code===200) {
          const data = result.data;
          commit('RECEIVE_CATEGORY_LIST',data)
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