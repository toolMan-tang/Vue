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

export const bannersList = () => ajax('/cms/banner');
//搜索
export const reqSearch = (searchParams) => ajax.post('/list', searchParams) 

export const floorsList = () => mock('/floors');

export const commendsList = () => mock('/recommends');