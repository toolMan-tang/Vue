<template>
   <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseenter = "showFirst" @mouseleave = "hiddenFirst">
                    <h2 class="all">全部商品分类</h2>
                    <div class="sort" v-show="isHome">
                        <div class="all-sort-list2" @click="toSearch">
                            <div class="item bo" 
                            v-for="(c1,index) in categoryLists"
                            :key="c1.categoryId"
                            @mouseenter="showSubList(index)"
                            :class="{active : isActive === index}"
                            >
                                <h3>
                                    <!-- <a href="">{{c1.categoryName}}</a> -->
                                    <!-- <router-link :to="`/search/?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
                                    <a :data-categoryName = "c1.categoryName" :data-category1Id = "c1.categoryId">{{c1.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                            <dt>
                                                <!-- <a href="">{{c2.categoryName}}</a> -->
                                                <!-- 使用了router-link 每使用一次 则生成一个对象组件 占据太多地址-->
                                                <!-- <router-link :to="`/search/?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                                                <a :data-categoryName = "c2.categoryName" :data-category2Id = "c2.categoryId">{{c2.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                    <!-- <a href="">{{c3.categoryName}}</a> -->
                                                    <!-- <router-link :to="`/search/?categoryName=${c3.categoryName}&category1Id=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                                                    <a :data-categoryName = "c3.categoryName" :data-category3Id = "c3.categoryId">{{c3.categoryName}}</a>
                                                </em>
                            
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
</template>

<script>
import {mapState} from "vuex";
// import _ from 'lodash' // 打包整个库  ==> 太大了, 4M
import throttle from "lodash/throttle" ;// 只引入需要的模块   ==> 减小打包文件  2.7M
export default {
  name: 'Nav',
  data () {
      return {
           isHome : this.$route.path === '/',
           isActive : -2,
      }
  },
  computed : {
    //   categoryList(){
    //       return this.$store.state.home.categoryLists;
    //   }
    ...mapState({
        categoryLists : (state) => state.home.categoryLists
        })

  },
  methods : {
      hideFirst () {
      // 标识当前已经离开了整个div
      this.isActive=-2
      // 如果当前不是首页, 隐藏一级列表
      if (this.$route.path!=='/') {
        this.isHome = false
      }
    },
      showFirst (){
          this.isHome = true;
          this.isActive = -1
      },
      hiddenFirst (){
          this.isHome = this.$route.path === '/';
          this.isActive = -2
      },
    //   showSubList(index){
    //        this.isActive = index;
    //   },
      showSubList : throttle(function(index){
          console.log(this.isActive);
          if (this.isActive !== -2) {
               this.isActive = index;
               console.log(234);
          }
      },500,{trailing : true}),

      toSearch(event){
          const target = event.target;
          //在dataset中 全部是小写
          const {categoryname, category1id, category2id, category3id} = target.dataset;
          
          let query = {
                  categoryName : categoryname
              }
          if (category1id) {
               query.category1Id = category1id              
          }else if (category2id) {
               query.category2Id = category2id              
          }else if (category3id) {
               query.category3Id = category3id
          }
          let location = {
              name : 'search',
              params: this.$route.params,
              query
          }
          console.log(location);
        //    this.$router.push(location,() => {});
           this.$router.push(location).catch(() => {})
           this.hideFirst()
      }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.active {
                           background-color : palevioletred;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
