<template>
  <div id="">
      <div class="indexList">
         <ul class="tabs">
             <li class="curr">全部</li>
             <li>电商</li>
             <li>微信</li>
             <li>下载注册</li>
             <li>红包</li>
             <li>分享</li>
         </ul>
      
        <div class="taskList">
           <ul>
               <li v-for="{item,index} in 10 " :key="index">                            
                   <dl>
                       <dt><img src="http://q8515fhl1.bkt.clouddn.com/1.jpg" alt=""> </dt>
                       <dd>
                           <div class="taskName">任务名字</div>
                           <div class="taskInfos">
                              <span class="peopleCount"><i></i>100人已赚</span>
                              <span class="remainderCount"><i></i>剩余20份</span>
                              
                              <span class="price"> <router-link to="">+1.23</router-link></span>
                             
                           </div> 
                           
                           <div class="taskOpt">
                             <b> <router-link to="">下载注册</router-link></b>
                           </div>
                       </dd> 
                         
                     
                   </dl>
                
               </li>
           </ul>
        </div>

      </div>
  
  </div>
</template>

<script>
export default {
  name: 'indexList'
}
</script>

<style scoped>
  /* @import "../../assets/css/base.css"; */
 
  .tabs{
      display: flex; 
  }

  .tabs li{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #9b9b9b;
    padding: 10px 0;
    position: relative;
  }
  
   .tabs li.curr::after{
       content: "";
       border-bottom:2px solid #fe7c3e;
       position: absolute;   
       width: 50%;
       left: 50%;
       margin-left: -25%;
       bottom:0;
   }



   
  .taskList ul li {
          padding: 25px 0;
          border-bottom: 1px solid #eee;
    }
    
   .taskList ul li dl{
     display: flex;
   }
  .taskList ul li dl dt{
      width: 54px; height: 54px;
      margin: 0 22px 0 14px;
  }
  .taskList ul li dl dt img{width: 54px; display: block;margin: 5px 0 0 0;  border-radius:50%}

  .taskList ul li dl dd{flex:1;}
  .taskList ul li dl dd div.taskInfos{
    margin: 6px 0 8px 0;
       display: flex;
    /* overflow: hidden;
    height: auto; */
 
  }
 

  .taskName{
    font-size: 16px;color:#222;
  }
.taskInfos span{
     display: flex;  
    margin-right: 24px;
     /*  display: block;
     float: left; */
     line-height: 16px;
     }
.taskInfos span i{margin-right: 4px;}
.peopleCount i{
  display: block; width: 15px; height: 15px;
  background: url(../../assets/images/count.png) no-repeat center;
  background-size:contain ;
}

.remainderCount i{
  display: block; width: 15px; height: 15px;
  background: url(../../assets/images/money.png) no-repeat center;
  background-size:contain ;
}

.price a{color:red;font-size: 18px; }
</style>
