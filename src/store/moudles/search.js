import {reqSearch} from '@/api';

const state = {
    productList : {}
}

const mutations = {
    RECEIVE_PRODUCT_LIST (state,data){
        state.productList = data;
    }
}

const actions = {
    async getProductList({commit},searchParams){
        let result = await reqSearch(searchParams);
        if(result.code == 200){
            commit("RECEIVE_PRODUCT_LIST",result.data)
        }
    }
}

const getters = {
   /* 商品分页列表 */
  goodsList (state) {
    //   console.log(state.productList.goodsList);
    return state.productList.goodsList || []
  },

  /* 品牌列表 */
  trademarkList (state) {
    return state.productList.trademarkList || []
  },

  /* 属性列表 */
  attrsList(state){
      return state.productList.attrsList || []
  }
}

export default {
    state,
    actions,
    mutations,
    getters

}