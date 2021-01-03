import {reqGoodsCartInfo,reqGoodsCartUpdate} from '@/api';

const state = {
  shopCartList:[]
}

const mutations = {
  GETCOODSCARTINFO(state,data){
    state.shopCartList = data;
  }
}

 const actions = {
     async getGoodsCartInfo ({commit}){
        let result = await reqGoodsCartInfo();
        console.log(result.data);
        console.log(123456);
        if(result.code == 200){
          console.log(23445544);
          commit('GETCOODSCARTINFO',result.data);
        }
     },
     async getGoodsShopCart({commit},{skuId,skuNum}){
      let result = await reqGoodsCartUpdate(skuId,skuNum);
      console.log(result);
      if(result.code == '200'){
          return 'ok'
      } else{
          return Promise.reject(new Error('failed'))
      }
   },
     
 }

 const getters = {
   
 }
export default {
    state,
    mutations,
    actions,
    getters
}