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
export const floorsList = () => mock('/floors');

export const commendsList = () => mock('/recommends');