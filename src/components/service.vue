<template>
     <div class="service">
        <headerx>联系客服</headerx>
        <div class="joins">
            <dl>
                 <dt>
                     <img src="../assets/images/qqun.png" alt="">
                     <span>QQ交流群</span>
                 </dt>
                 <dd class="tle">
                     任务发布/任务交流/售后问题处理
                 </dd>
                 <dd class="join">
                    <input type="button" value="申请加群">
                 </dd>
            </dl>
        </div>
        <div class="qq">
            <ul class="qqList">
                <li>
                    <div class="iconQQ"></div>
                    <div class="infos">
                        <p>任务审核</p>
                        <p>1234567</p>
                    </div>
                    <div class="actCopy">
                        <input type="button" value="点击复制" />
                    </div>
                </li>
            </ul>
        </div>

     </div>
</template>



<script>
import headerx from './header.vue'
export default {
    name:"service",
       components:{
        headerx
      
    }



}
</script>

<style scoped>
.service{height: 100%; overflow: hidden; background: #f7f7f7;}
  .joins{margin: 0 20px; background: white; padding: 20px 0;}
  .joins dl dt{ display: flex; justify-content: center; margin: 16px 0;}
  .joins dl dt img{ width: 34px; height: 25px;}
  .joins dl dt span{  line-height: 25px; font-size: 18px;color:#888;margin: 0 0 0 5px;}
  .tle{ margin: 16px 0; color:#222;font-size: 16px; text-align: center;}
  .join{margin: 0 40px;}
  .join input{
      display: block;
      height: 38px;
      background: linear-gradient(to right,#FFB372,#FE7C3E);
      border:none;
      width: 100%;
      font-size: 16px;
      color: white;
      border-radius:19px;
  }

  .qqList{margin: 30px 20px 20px 20px;background: white; padding: 15px 0 20px 0;}
  .qqList li{ display: flex;align-items: center;}
  .qqList li{padding: 0 30px;}
  .qqList li .iconQQ{ 
   width: 30px; height: 30px;background: url(../assets/images/qq.png) no-repeat;
   background-size: cover;
  }
  .qqList li .infos{flex:1; margin: 0 0 0 10px;}
  .qqList li p{ margin: 0;}
  .qqList li .actCopy{ width: 80px; }
  .qqList li .actCopy input{ 
      width: 100%; background:linear-gradient(to right,#FFB372,#FE7C3E) ;
      color:white;border:none;
       font-size: 13px;
       height: 24px;
       border-radius:15px;
  }

</style>
