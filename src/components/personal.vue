<template>
     <div class="personal">
         <headerx>个人中心</headerx>
         <div class="userInfo">
             <dl>
                 <dt>
                     <img src="http://q8515fhl1.bkt.clouddn.com/1.jpg" alt="">
                 </dt>
                 <dd class="infos">
                     <div class="uname">名字名字</div>
                     <div class="uid">ID:9527</div>
                     <div class="ustate">
                         <b class="s1">已实名</b>
                         <b class="s2">保证金</b>
                     </div>
                 </dd>
                 <dd class="alink">
                     <router-link to="/index">保证金</router-link>
                 </dd>
             </dl>
         </div>
           
         <div class="userRemainder">
             <ul class="urGroups">
                 <li>
                   <dl>
                       <dt>用户余额（元）</dt>
                       <dd class="accountNum">0.00</dd>
                       <dd class="urOpt">
                           <router-link to="">提现</router-link>
                       </dd>
                   </dl>
                 </li>
                 <li> 
                     <dl>
                       <dt>发布余额（元）</dt>
                       <dd  class="accountNum">0.00</dd>
                       <dd class="urOpt">
                            <router-link to="">提现</router-link>
                            <router-link to="">充值</router-link>
                       </dd>
                   </dl>
                 </li>
             </ul>
         </div>  

         <navx>1</navx>
        
        <div class="options">
              <ul class="list">             
                    <li class="tipoff"> 
                        <router-link to=""><i class="ico ico_tf"></i> <span>举报</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
                     <li class="blacklist"> 
                        <router-link to="blacklist"><i class="ico ico_bl"></i> <span>黑名单</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
                     <li class="invite"> 
                        <router-link to=""><i class="ico ico_inv"></i> <span>邀友赚钱</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
                     <li class="help"> 
                        <router-link to=""><i class="ico ico_help"></i> <span>帮助中心</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
                     <li class="contact"> 
                        <router-link to=""><i class="ico ico_ctct"></i> <span>联系客服</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
                     <li class="certification"> 
                        <router-link to=""><i class="ico ico_cert"></i> <span>实名认证</span> <b>未认证</b> <i class="arrow"></i></router-link>               
                    </li>
                    </ul>
                    <ul>
                     <li class="setting"> 
                        <router-link to=""><i class="ico ico_set"></i> <span>设置</span> <b></b> <i class="arrow"></i></router-link>               
                    </li>
              </ul>
        </div>
         
     </div>
</template>



<script>
import headerx from './header.vue'
import navx from './personal/nav.vue'
export default {
    name:"test",
    components:{
        headerx,
        navx
    }


}
</script>

<style scoped>
.personal{
    background: #f7f7f7;
}
     .userInfo{
       background: white;
     }
     .userInfo dl{ display: flex; padding: 15px 0;}
     .userInfo dl dt{  width: 54px;}
     img{width: 100%; border-radius: 50%; }
     .userInfo dt{margin: 0 16px;}

   .infos{flex: 1;}

     .uname{font-size:14px ; color:#222;}
     .uid{font-size:11px ; color:#666; margin: 2px 0;}
     .ustate{font-size: 10px;}
     .ustate b{ display: inline-block;  height: 18px; line-height: 18px; padding: 0 3px; color:white;font-size: 12px;}
     .ustate b.s1{background: orange;}
     .ustate b.s1{  background: #ff7300;}
     .userInfo .alink{ width: 120px; height: 54px; position: relative;}
     .userInfo .alink a{ 
         position: absolute; 
         right: 25px; bottom: 0px; background: orange; 
       color: white; border-radius:10px;
       padding: 2px 10px;
     }
   .userInfo .alink a::after{
         content: "";
         height: 10px; width: 10px;
         border-left: 1px solid #d5d5d5;
         border-top:1px solid #d5d5d5 ;
         position: absolute;
         right: -10px;
         top: 50%;
         margin-top:-5px ;
         transform:rotate(135deg) ;
    }

   
   .userRemainder{background: white; overflow: hidden;}

  .urGroups{
      display: flex;
      background: linear-gradient(to right,#FFB372,#FE7C3E);
      margin:15px 15px;
      border-radius:10px;
      padding: 20px 30px;
      justify-content: space-between;
     }
    .urGroups li{position: relative;}
    .urGroups li:first-child{ width: 45%; }
    .urGroups li:first-child::after{
        content:"" ;
        border-left:1px solid #fff;
        height: 40%;
        position:absolute;
        right:0;
        top:30%;
     }
    .urGroups li dt{color:white;font-size: 14px;}
    .urGroups li .accountNum{ font-size:30px ; color: white; margin: 5px 0;}
    .urOpt a{ display: inline-block; padding: 4px 15px; margin-right: 5px;  background: white; color:#FE7C3E; border-radius:10px;}


    /**/
   .options{ padding: 0 0 10px 0; }
   .options ul{ margin: 10px 0 0px 0;background: white;}
   .options ul li{  margin: 0 15px; }
   .options ul li a{ display: flex;   justify-content: space-between;  align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;}
     .options ul li span{font-size: 16px;color: #222; flex: 1;}
   .options ul li a i.ico{
        display: block; width: 16px;height: 16px; margin: 0 10px 0 0;  background-repeat: no-repeat;
    background-size: contain;
    background-position:center ;
     }
   .options ul li a i.ico_tf{  background-image: url(../assets/images/personal/i_tipoff.png);  } 
   .options ul li a i.ico_bl{  background-image: url(../assets/images/personal/i_blacklist.png);  } 
   .options ul li a i.ico_inv{  background-image: url(../assets/images/personal/i_invite.png);  } 
   .options ul li a i.ico_help{  background-image: url(../assets/images/personal/i_help.png);  } 
   .options ul li a i.ico_cert{  background-image: url(../assets/images/personal/i_certification.png);  } 
   .options ul li a i.ico_ctct{  background-image: url(../assets/images/personal/i_service.png);  } 
   .options ul li a i.ico_help{  background-image: url(../assets/images/personal/i_help.png);  } 
   .options ul li a i.ico_set{  background-image: url(../assets/images/personal/i_setting.png);  } 
      
      

   .options ul li a b{color:#888;font-size: 14px;}


   .options ul li a i.arrow{ 
        display: block; width: 12px;height: 12px; 
        border-left: 1px solid #d5d5d5;  
        border-top: 1px solid #d5d5d5;  
        transform: rotate(135deg);
        margin-right: 15px;
        }

</style>
