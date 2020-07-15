 <template>
   <div class="sWrap">
     <swiper class="swiperboard swindex">
        <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/block_1551272091767-MpEtuUbM9f?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
        <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/cms/2019_02_19/1550557042453.jpg?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
     </swiper>
   </div>
  
</template>

<script>

 import VueAwesomeSwiper from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
 import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:"indexswiper",
    components:{
        swiper,
        swiperSlide
    }
    
}
</script>

<style  scoped>
 .sWrap{margin: 10px;}
 .swindex{width: 100%;}
 .ssi{width: 100%;}
 .swindex img{ width: 100%;}

 .swiperboard{position: relative;}
 .swiper-pagination{ bottom:5px;left: 50%;margin-left:-20px;} 

</style>