import {reqGoodsDetail} from '@/api';

const state = {
  skuDetailInfo : {}
}

const mutations = {
    REQGOODSDETAIL(state,data)  {
        state.skuDetailInfo = data;
    }
}

 const actions = {
     async getGoodsDetail({commit},skuId){
        //  console.log(skuId);
        let result = await reqGoodsDetail(skuId);
        console.log(result);
        if(result.code == '200'){
            commit('REQGOODSDETAIL',result.data)
        }
     },
     
     
 }

 const getters = {
    categoryView(state){
        return state.skuDetailInfo.categoryView || {}
    },
    skuInfo(state){
        return state.skuDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.skuDetailInfo.spuSaleAttrList || []
    }
 }
export default {
    state,
    mutations,
    actions,
    getters
}