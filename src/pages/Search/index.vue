<template>
  <div>
    <h2>Search组件</h2>
    <!-- <h3>params.keyword: {{$route.params.keyWord3}}</h3>
    <h3>query.keyword2: {{$route.query.keyWord3}}</h3> -->
    <h3>props.keyword: {{keyWord3}}</h3>
    <h3>props.keyword: {{keyWord4}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyWord3', 'keyWord4'],
}
</script>

<style lang="less" scoped>

</style>
