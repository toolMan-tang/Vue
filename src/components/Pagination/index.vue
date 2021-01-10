<template>
  <div class="pagination">
    <button @click = "myCurrentPage(currentPage - 1)" :disabled = "currentPage - 1" :class="{disable: currentPage == 1}">上一页</button>
    <button v-if="startEnd.start > 1" @click = "myCurrentPage(1)">1</button>
    <button v-if="startEnd.start > 2" class="disable">...</button>
    <!-- 
      多执行了从1到start-1的v-for遍历和v-if的判断
      <button v-for="item in startEnd.end" v-if="item>=startEnd.start"
      /:class="{active: item===myCurrentPage}" @click="setCurrentPage(item)">{{item}}</button> -->
    <!-- <button v-for="item in startEndArr" :key="item"
      :class="{active: item===myCurrentPage}" @click="setCurrentPage(item)">{{item}}</button> -->
    <!-- <div v-if="isShow">
      <button v-for="item in startEnd.end" 
      :class="{active: item===myCurrentPage}" @click="setCurrentPage(item)">{{item}}</button>
    </div> -->
    
    <!-- <button>4</button>
    <button class="active">5</button>
    <button>6</button>
    <button>7</button> -->
    <button @click = "myCurrentPage(page)" v-for="page in startEnd.end" v-if="page >= startEnd.start" :key="page.start">{{page}}</button>

    <button v-if="startEnd.end < totalPage - 1" class="disable">...</button>
    <button @click = "myCurrentPage(totalPage)" v-if="startEnd.end < totalPage">{{totalPage}}</button>
    <button :disabled = "totalPage" :class="{disable: currentPage == totalPage}">下一页</button>
    <button>共 {{total}} 条</button>
    <!-- <button>共 23 条</button> -->
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: { // 当前页码
      type: Number,
      default: 1
    },
		total: { // 所有数据的总数量
      type: Number,
      default: 0
    },
    pageSize: {// 每页的最大数量
      type: Number,
      default: 10
    },
    showPageNo: { // 最大连续页码数
      type: Number,
      default: 5,
      // 要求传的值要是奇数
      validator: function (value) {
        return value%2===1
      }
    }
  },
  computed : {
    totalPage(){
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd(){
      let totalPage = this.total / this.pageSize;
      let start,end;
      if(totalPage <= this.showPageNo){
        start = 1;
        end = totalPage;
      }
      if(totalPage > this.showPageNo){
        start = currentPage - Math.floor( currentPage/2)
        end = currentPage + Math.floor( currentPage/2)
      }
      // if(start < 1){
      //   start = 1;
      //   end = currentPage;
      // }
      // 算出变化值
      let num;
      if(start < 1){
        num = 1 - start;
        start = 1;
        end += num;
      }
       if(end < totalPage){
        num = end - totalPage;
        start -= num;
        end -= num;
      }
      // if(end > totalPage){
      //   end = totalPage;
      //   start = totalPage - showPageNo
      // }
      return {start,end};
    }
  },
  methods: {
    myCurrentPage(page){
      console.log(page);
      this.$emit('ownOrderInfoList',page)
    }
  },
}
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &.active {
        background: blue;
        color: white;
        cursor: not-allowed;
      }

      &.disable {
        cursor: not-allowed;
        color: #ccc;
      }
    }
  }
</style>
