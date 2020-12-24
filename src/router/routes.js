import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '@/pages/Login'

export default [
    {
        path: '/',
        component: Home
      },
      {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        // // props: true, // 只映射params参数
        // props: (route) => ({keyword3: route.params.keyword, keyword4: route.query.keyword2}) 
        props : (route) =>({
          keyWord3 : route.params.keyword,
          keyWord4 : route.query.categoryname
        })
      },
      {
        name: 'register',
        path: '/register',
        component: Register,

      },
      {
        path: '/login',
        component: Login,
        // meta: {
        //   isHideFooter: true
        // }
      }
]