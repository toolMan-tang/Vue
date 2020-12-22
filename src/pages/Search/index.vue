<template>
  <div>
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
