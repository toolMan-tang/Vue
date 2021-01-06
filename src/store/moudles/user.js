import {getUserTempId,setToken,getToken, removeToken} from '@/utils/userabout';
import {reqRegister,reqLogin,reqGetUserInfo} from '@/api';

const state = {
    userTempId : getUserTempId(),
    token : getToken(),
    userInfo : {}
}

const mutations = {
    GETLOGIN (state,token){
        state.token = token
    },
    GETUSERINFO(state,data){
        // console.log(data);
        state.userInfo = data
    },
    RESETUSERINFO(state){
        state.userInfo = {}
        state.token = ''
    }
}

const actions = {
    async getRegister({commit},userInfo){
        const result = await reqRegister(userInfo);
        console.log(result);
        if(result.code == 200){
            return 'ok'
        } else{
            return Promise.reject(new Error(result.data))
        }
    },
    async getLogin({commit},userInfo){
        const result = await reqLogin(userInfo);
        console.log(result);
        if(result.code == 200){
            commit('GETLOGIN',result.data.token);
            // //登录成功 开始保存本地token
            setToken(result.data.token)
            return 'ok'
        } else{
            return Promise.reject(new Error(result.data))
        }
    },
    async getUserInfo({commit}){
        const result = await reqGetUserInfo();
        // console.log(result.data);
        if(result.code == 200){
            commit('GETUSERINFO',result.data);
            return 'ok'
        } else{
            return Promise.reject(new Error('failed'))
        }
    },
    async resetUserInfo({commit}){
        removeToken();
        commit('RESETUSERINFO');
        
    }
}

const getters = {
  
}

export default {
    state,
    actions,
    mutations,
    getters

}