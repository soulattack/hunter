<template>
     <div class="mytasks">
          <headerx>我的任务</headerx>
         <ul class="tabs">
            <li>待审核</li>
            <li class="curr">审核中</li>
            <li>已通过</li>
            <li>未通过</li>
            <li>复审举报</li>
         </ul>
        <div class="tips">
               任务未通过后有24小时申请复审和举报期，如超时未处理任务将关闭。
        </div>
         <div class="taskListWrap">
             <ul class="taskList">
                   <li>
                       <dl>
                           <dt>
                               <div class="imgHeader"><img src="http://q8515fhl1.bkt.clouddn.com/1.jpg" alt=""></div>
                               <div class="infos">
                                   <p>名称</p>
                                   <p>交稿编号:2123</p>
                               </div>
                               <div class="price">+1.23</div>
                           </dt>
                           <dd class="tr">
                             <div class="result">客服处理完成：商家胜诉</div>
                             <div class="status">商家胜诉</div>

                           </dd>
                          <div class="opt">
                                <input type="button" value="删除">
                          </div>
                       </dl>
                   </li>
                   
             </ul>
         </div>
     </div>
</template>



<script>
import headerx from './header.vue'
export default {
    name:"mytask",
    components:{
          headerx
    }


}
</script>

<style scoped>
.mytasks{height: 100%;overflow: scroll;}
.tips{ padding: 10px 25px;background: #FFF0E9;  color: #E62739; font-size: 15px;}
 .taskList{}
 .taskList li{ padding: 15px 0 15px 20px;background: white;}
 .taskList li dl dt{display: flex; border-bottom: 1px solid #eee; padding: 0 15px 10px 0;}
 .taskList li dl dt div.imgHeader {width: 54px; }
 .taskList li dl dt div.imgHeader  img{width: 54px; border-radius:50% ;}
 .taskList li dl dt div.infos{flex: 1;margin: 0 0 0 20px;}
 .taskList li dl dt div.infos p{margin: 0 ;}
 .taskList li dl dt div.price{  }
.tr{display: flex; padding: 10px 10px 10px 0; font-size: 14px; justify-content: space-between;}

 .opt{display: flex;justify-content: flex-end; padding: 0 15px 0 0;}
 .opt input{color:white;  height: 20px; line-height: 20px; padding: 0 15px; font-size: 12px;  background: #9b9b9b; border-radius:10px;border:none;}

</style>
