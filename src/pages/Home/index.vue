<template>

  <div>
    <Nav></Nav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
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
export default {
  name: 'Home',
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
