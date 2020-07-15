<template>
  <div id="">
      <div class="index"> 
         <search></search>
         <rec></rec>
         <swiper-list/>
        

      </div>
  
  </div>
</template>

<script>
import swiperList from './index/indexList.vue'
import search from './index/indexSearch.vue'
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
      rec
  },

 methods:{
   init(){
   
   /*
     console.log("stare");
        var xurl="http://hunter.keyou666.com/api/v1/index";
       
      this.$axios({
              method:"post",
              url:xurl,
              data:this.$qs.stringify({
                token:"UzKWJSHe9pTrtkA0bfHwSA=="
              })   

      }).then(function(res){

     console.log(res)

      })
   */
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

  }

}
</script>

<style scoped>
  .index{background: white;}
</style>
