// import service from "./ajax";
import ajax from "./ajax";

export function categoryList () {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
    return ajax({
      url: '/product/getBaseCategoryList',
      // method: 'get'
    })
  }