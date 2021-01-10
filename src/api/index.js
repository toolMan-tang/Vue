// import service from "./ajax";
import ajax from "./ajax";
import mock from "./mockAjax";

export function categoryList () {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
    return ajax({
      url: '/product/getBaseCategoryList',
      // method: 'get'
    })
  }

// export function bannerList () {
//   // return ajax.get('/product/getBaseCategoryList')
//   // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
//   return ajax({
//     url: '/cms/banner'
//     // method: 'get'
//   })
// }

export const bannersList = () => mock('/banners');
//搜索
export const reqSearch = (searchParams) => ajax.post('/list', searchParams);
export const reqGoodsDetail = (skuId) => ajax(`/item/${skuId}`);
//修改增加 商品
export const reqGoodsCartUpdate = (skuId,skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`);
//购物车
// export const reqGoodsCartInfo = () => ajax(`/cart/cartList`);
export const reqGoodsCartInfo = () => {
  return ajax({
    url:'/cart/cartList',
    method:'get'
  })
}
//修改购物车状态
export const reqUpdateCartChecked = (skuID,isChecked) => ajax(`/cart/checkCart/${skuID}/${isChecked}`);

//注册
export const reqRegister = (userInfo) => {
  return ajax({
    url : '/user/passport/register',
    method : 'post',
    data : userInfo
  })
}

//登录
export const reqLogin = (userInfo) => {
  return ajax({
    url : '/user/passport/login',
    method : 'post',
    data : userInfo
  })
}
//得到个人信息
export const reqGetUserInfo = () => ajax('/user/passport/auth/getUserInfo');

//订单页信息
export const reqTradeInfo = () => {
  return ajax({
    url : '/order/auth/trade',
    method : 'get'
  })
}
//提交订单信息
export const reqOrderInfo = (tradeData,tradeNo) => {
  return ajax({
    url : `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method : 'post',
    data : tradeData
  })
}
//获取支付信息
//get
export const reqPayInfo = (orderId) => {
  return ajax({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}

//查询订单支付状态
///api/payment/weixin/queryPayStatus/{orderId}
//get
export const reqPayStatus = (orderId) => {
  return ajax({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
  })
}

//查询我的订单
///order/auth/{page}/{limit}
//get
export const reqOwnOrderInfo = (limit,page) => {
  return ajax({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
  })
}

export const floorsList = () => mock('/floors');

export const commendsList = () => mock('/recommends');