<template>
<<<<<<< HEAD
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在此显示 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',

  mounted () {
    this.$store.dispatch('getNavList');
  },

  components: {
    Header,
    Footer
=======
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
  name: '',
  components : {
      Footer,
      Header
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b
  }
}
</script>

<<<<<<< HEAD
<style>
=======
<style scoped>
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b

</style>
