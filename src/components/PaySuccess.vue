<template>
     <div class="paysuccess">
         <headerx>支付成功</headerx>
         <div class="payResult">
             <dl>
                 <dt>
                     <img src="../assets/images/payok.png" alt="">
                 </dt>
                 <dd>
                    <p>恭喜支付成功</p> 
                        
                 </dd>
                 <dd>
                     
                     <router-link to="" class="ahref">查看任务详情</router-link>
                 </dd>
             </dl>
         </div>
     </div>
</template>



<script>
import headerx from "./header"
export default {
    name:"paysuccess",
    
    components:{
      headerx

    },
	methods:{
	
	
	},

  mounted:function(){
    

  }


}
</script>

<style scoped>

  .payResult dl dt { text-align: center;padding: 50px 0 20px 0;}
  .payResult dl dt img{width: 134px; height: 135px;}
  .payResult dl dd p{text-align: center; font-size: 20px; color:#666; margin: 0 0 30px 0;}
.payResult a{
    display: block; text-align: center; margin: 0 auto;
       width: 280px; height: 50px;  line-height: 50px;
     
       border-radius:25px;color:white;font-size: 18px;    background: #FE7C3E;
       }

</style>
