<template>
     <div class="login">
         <headerx>登录</headerx>
         <div class="loginbox">
                   <h2>手机号登录</h2>
                    <ul>
                        <li> <span>手机号</span> <input type="text" value="" placeholder="请填写手机号" class="phoneNum"> </li>
                        <li> 
                            <span>验证码</span>
                            <input type="text" value="" placeholder="请填写验证码" class="checkCode"> 
                            <input type="button" value="获取验证码" id="getCheckCode">
                        </li>
                    </ul>
                    <div class="lgopt">
                     <button :disabled="isButtonDisabled" @click="login" id="btnLogin">登录</button>     
                    </div>
         </div>
     
     </div>
</template>



<script>
import headerx from './header.vue'
export default {
    name:"loginempower",
    data:function(){
        return{
            isButtonDisabled:false
        }
    },
   components:{
       headerx
   },
    methods:{
       login(){
              console.log("我要登录")
      
       },

    }
  

}
</script>

<style scoped>
 .login {height: 100%;overflow: hidden; background: white;}

 .loginbox{margin: 30px ;}
 .loginbox h2{color:#222;font-size: 20px; margin-bottom: 45px;}
 .login ul{font-size: 16px; border-bottom:1px solid #eee}
 .login ul li{margin: 22px 0; }
 .login ul li span{color: #222; margin-right: 20px;}
 .login ul li input{ border: none;color: #888;}
 #getCheckCode{color:#FE7C3E;border:1px solid #FE7C3E; background: white; padding: 4px 10px;border-radius:3px}
.lgopt{margin: 40px 0 0 0;}
 #btnLogin{width: 300px; height: 48px; display: block; margin: 0 auto;
   background: #FE7C3E; color: white; font-size: 16px;
   border:none; border-radius:24px
 }
</style>
