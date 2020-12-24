import ajax from './ajax';

export function reqNavList(){
    return ajax({
        url : '/product/getBaseCategoryList'
    })
}