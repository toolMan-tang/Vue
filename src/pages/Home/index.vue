<template>

  <div>
    <Nav></Nav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor = "floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from "@/pages/Home/Brand";
import Container from "@/pages/Home/Container";
import Floor from "@/pages/Home/Floor";
import Like from "@/pages/Home/Like";

import Rank from "@/pages/Home/Rank";
import Recommend from "@/pages/Home/Recommend";

import {mapState} from 'vuex';
export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('getFloors');
    this.$store.dispatch('getRecommends');    

  },
  computed :{
    ...mapState({
      floors : state => state.home.floors,
    })
  },
  components: {
    Recommend,
    // Nav,
    Rank,
    Like,
    Floor,
    Container,
    Brand
  }

}
</script>


<style scoped>


</style>
