<template>
  <div>
    <h2>Search组件</h2>
    <li>{{keyWord}}</li>
    <li>{{content}}</li>
    
  </div>
</template>

<script>
export default {
  name: 'Search',
  props : ['keyWord','content']
}
</script>

<style scoped>


</style>
