<template>
<<<<<<< HEAD
  <div>
    <TypeNav></TypeNav>
    <!-- <type-nav/> -->
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>

  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'


export default {
  name: 'Home',

  // 注册局部组件
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>
=======
  <div>Home</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

</style>
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b
