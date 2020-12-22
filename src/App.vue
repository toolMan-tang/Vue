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
  name: '',
  components : {
      Footer,
      Header
  }
}
</script>

<style scoped>

</style>
