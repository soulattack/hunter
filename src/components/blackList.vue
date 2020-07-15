<template>
     <div class="blacklist">

         
        <ul class="bList">
           
           <li v-for="item in black" :key="item.id">
             <dl>
                 <dt>{{item.number}}</dt>
                 <dd>
                     <div class="in01">用户提交老数据</div>
                     <div class="in02">禁止做悬赏，禁止发布消息</div>
                     <div class="in03">恢复时间:<span>{{item.time}}</span></div>
                 </dd>
             </dl>
           </li>

           

        </ul>
    

     </div>
</template>



<script>
export default {
    name:"blackList",
    data:  function(){
           return{
                black:[ 
                    {id:1,number:"122344",time:"2020-01-04"},
                    {id:1,number:"122344",time:"2020-01-04"}

                 ]
                 
               

           }   
        
    },
    methods:{

    }
}
</script>

<style scoped>
  .bList{ margin: 0 ;}
  .bList li{ margin: 0 0 10px 0 ; padding: 15px 15px 0px 15px;background: white;}
  .bList li dt{font-size: 16px;color:#222}
  .bList li dd{}
  .bList li dd div{ padding: 3px 0;}
  .bList li dd div.in01{font-size: 14px; color:#888}
  .bList li dd div.in02{font-size: 14px;color:#E62739;border-bottom:1px solid #eee; padding-bottom:5px ;}
  .bList li dd div.in03{font-size: 14px; color:#888;text-align: right; padding: 12px 0; }
  .bList li dd div.in03 span{margin: 0 5px;}
</style>
