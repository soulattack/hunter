<template>
  <div id="">
      <div class="index"> 
         <search></search>
         <swiper></swiper>
         <rec></rec> 
         <swiper-list/>
      </div>

  <div style="overflow:hidden">

      <div class="dd" ref="wrapper" style="height:100px">
          <div class="ccc" style="height:140px">111</div>
      </div>
    </div>
  
  </div>
</template>

<script>
import swiperList from './index/indexList.vue'
import search from './index/indexSearch.vue'
import swiper from './index/indexSwiper.vue'
import rec from './index/indexRecommend.vue'

import BScroll from 'better-scroll' //导入better-scroll

export default {
  name: 'index',
  data:function(){

      return{
              mys:"我是列表"

      }
  },
  
  components:{
      swiperList,
      search,
      rec,
      swiper
  },

 methods:{
   init(){
   

      this.$https("/api/v1/index","post",         			
				{
                  token:"UzKWJSHe9pTrtkA0bfHwSA=="
                }).then(function(res){
				  console.log("laiba::::");
				  console.log(res);
				});

   }

 },

  mounted:function(){
     console.log("zde");
     this.init();

   this.ss=new BScroll(this.$refs.wrapper, {  click: true     });

  }

}
</script>

<style scoped>
  .index{background: white; padding: 50px 0 0 0;}
</style>
