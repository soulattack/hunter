<template>
     <div class="taskdetail">
          <headerx>
              <span slot="arrow" class="ba"></span>
              <span slot="tle">任务详情</span>
              <span slot="opt"></span>
          </headerx>
          <div class="tContWrap">
            <div class="task_State">
                <div>
                    <span>审核未通过</span>
                    <input type="button" value="放弃任务" class="">
                    <input type="button" value="提交复审" class="">
                    <input type="button" value="举报维权" class="">
                </div>
                <div class="task_State_Desc">
                    您提交的任务未满足条件 请重新提交
                </div>
            </div>
            <div class="user">
                <dl>
                    <dt><img src="" alt=""></dt>
                    <dd>
                         <p>名字</p>
                         <p>
                              <span>已实名</span>
                              <span>保证金</span>
                         </p>
                        
                    </dd>
                </dl>
            </div>
            <div class=""></div>
            <div class=""></div>
          </div>
        
     </div>
</template>



<script>
import headerx from './header'
export default {
    name:"taskdetail",
    components:{
        headerx
    }
	
	

}
</script>

<style scoped>
 .tContWrap{padding: 50px 0;}
</style>
