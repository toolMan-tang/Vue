import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import Paysuccess from "@/pages/PaySuccess";

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
      component : Trade
    },
    {
      path : '/pay',
      component : Pay
    },
    {
      path : '/paysuccess',
      component : Paysuccess
    }
]