
import {reqNavList} from '@/api';

const state = {
  navLists : []
}
const mutations = {
  NAVLISTS(state,data){
    state.navLists = data.slice(0,15)
  }
}

const actions = {
  async getNavList({commit}){
    
    const result = await reqNavList();
    console.log(result);
    if(result.code == 200){
      let data = result.data;
      commit('NAVLISTS',data);
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}