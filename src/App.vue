<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="!$route.meta.isHideFooter"></Footer>
</div>
  
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export default {
  name: 'App',

  mounted () {
    // 异步获取三级分类列表
    // getCategoryList().then(result => {
    //   console.log('result', result)
    // })

    // 分发请求获取分类列表的异步action
    // this.$store.dispatch("categoryList");
    this.$store.dispatch('getCategoryList');
  },
  components : {
      Footer,
      Header
  }
}
</script>

<style scoped>

</style>
