<template>
     <div class="taskType">
         <headerx>选择任务类型</headerx>
         <div class="taskTypesBox">
              <div class="tips">
                  温馨提示：请正确选择发布任务的类型，分类选择错误会导致发布审核不通过。
              </div>
              <ul class="typeList">
                  <li class="item">
                      <router-link to="">
                      <dl>
                          <dt> <img src="../assets/images/icon/download.png" alt=""></dt>
                          <dd class="infos">
                              <p class="p1">下载注册</p>
                              <p class="p2">APP下载注册 完成任务</p>
                          </dd>
                          <dd class="arrow"></dd>
                      </dl>
                      </router-link>                
                  </li>
                  <li class="item">
                      <router-link to="">
                      <dl>
                          <dt> <img src="../assets/images/icon/download.png" alt=""></dt>
                          <dd class="infos">
                              <p class="p1">下载注册</p>
                              <p class="p2">APP下载注册 完成任务</p>
                          </dd>
                          <dd class="arrow"></dd>
                      </dl>
                      </router-link>                
                  </li>
                  <li class="item">
                      <router-link to="">
                      <dl>
                          <dt> <img src="../assets/images/icon/download.png" alt=""></dt>
                          <dd class="infos">
                              <p class="p1">下载注册</p>
                              <p class="p2">APP下载注册 完成任务</p>
                          </dd>
                          <dd class="arrow"></dd>
                      </dl>
                      </router-link>                
                  </li>
                  <li class="item">
                      <router-link to="">
                      <dl>
                          <dt> <img src="../assets/images/icon/download.png" alt=""></dt>
                          <dd class="infos">
                              <p class="p1">下载注册</p>
                              <p class="p2">APP下载注册 完成任务</p>
                          </dd>
                          <dd class="arrow"></dd>
                      </dl>
                      </router-link>                
                  </li>
                   <li class="item">
                      <router-link to="">
                      <dl>
                          <dt> <img src="../assets/images/icon/download.png" alt=""></dt>
                          <dd class="infos">
                              <p class="p1">下载注册</p>
                              <p class="p2">APP下载注册 完成任务</p>
                          </dd>
                          <dd class="arrow"></dd>
                      </dl>
                      </router-link>                
                  </li>
              </ul>

         </div> 
     </div>
</template>



<script>
import headerx from './header'

export default {
    name:"selecttasktype",
    data:function(){
        return{

        }
    },
    components:{
       headerx
    }


}
</script>

<style scoped>
  .taskType{
      padding: 50px 0 0 0;
  }
  .tips{
      color:#E62739;font-size: 15px;
      padding: 10px 15px;
      background: #FFF0E9;
  }

  .item{padding: 5px 0; border-bottom:1px solid #eee}
  .item dl{display: flex; align-items: center; padding: 0 10px;}
    .item dl dt {padding: 0 10px;}
  .item dl dt img{ width: 20px; height: 20px;}
  .p1{font-size: 18px; color: #222; margin: 5px 0 5px 0;}
  .p2{margin: 5px 0 5px 0;}
  dd.infos{flex: 1; margin: 0 0 0 10px;}
  .arrow{ width: 10px; height: 10px;
      border-top:1px solid #3a3a3a ;
      border-right:1px solid #3a3a3a ;
      transform: rotate(45deg);
      margin: 0 20px 0 0;
   }
</style>
