<template>
     <div class="message">
         <ul  class="messageList">
            <li> 
                <dl>
                     <dt><span class="subtime">11:56</span></dt>
                     <dd>
                         <div class="tle">
                               <span class="state">发布成功</span>  
                               <b class="subfrom">管理员</b>
                         </div>                     
                          <div class="cont">
                               <span>恭喜，您发布的【关注公众号 秒批 速来】审核通过，可前往【任务管理】【进行中】查看</span> 
                          </div>                   
                    </dd>
                </dl>
               
            </li>
         </ul>
     </div>
</template>



<script>
export default {
    name:"messageCenter"


}
</script>

<style scoped>
    
    .messageList li dt{ padding: 4px 0; text-align: center; color: #9b9b9b;font-size: 15px;}
    .messageList li dl dd{margin: 0 15px; background: white; padding: 15px 20px;}
  
     .messageList li dl .tle span{font-size: 18px; color: #222; vertical-align: middle;}
    .messageList li dl dd b{ display: inline-block; margin: 0 0 0 6px;  padding: 3px 8px;vertical-align: middle; border-radius:3px; background: #ff7b00;color:white}
    .cont{ margin: 15px 0 0 0; color: #9b9b9b;font-size: 15px; }
</style>
