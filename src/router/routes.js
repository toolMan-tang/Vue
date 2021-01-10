import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import Paysuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import OwnOrder from "@/pages/Center/OwnOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

export default  [
    {
        path : '/',
        component : Home
    },
    {
        path : '/search/:keyword?',
        component : Search,
        name : 'search',
        props :  (route) => ({
          keyword : route.params.keyword,
        })
    
    },
    {
        path : '/login',
        component : Login,
        meta: { 
            isHideFooter: true
         }
    },
    {
        path : '/register',
        component : Register,
        meta: { 
            isHideFooter: true
        }
    },
    {
      path : '/detail/:skuId',
      component : Detail
    },
    {
      path : '/shopcart',
      component : ShopCart
    },
    {
      path : '/trade',
      component : Trade,
      // beforeEnter: (to, from, next) => {
      //   if(from.path === '/shopcart'){
      //     next()
      //   }else{
      //     next('/')
      //   }
      // }
    },
    {
      path : '/pay',
      component : Pay,
      beforeEnter: (to, from, next) => {
        if(to.path === '/trade'){
          next()
        }else{
          next('/')
        }
      }
    },
    {
      path : '/paysuccess',
      component : Paysuccess
    },
    {
      path : '/center',
      component : Center,
      children : [
        {
          path : 'ownorder',
          component : OwnOrder
        },
        {
          path : 'grouporder',
          component : GroupOrder
        },
        {
          path:'',
          redirect: 'ownorder'
        }
      ]
    }
]