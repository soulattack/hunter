<template>
     <div class="login">
         <div class="img">
             <img src="../assets/images/logohunter.png" alt="">
         </div>
         <h3>想赚钱就上赏金猎人</h3>

         <div class="btn">
             <a href="" class="LoginBtn"><i></i><span>微信授权登录</span></a>
         </div>
         <p class="tips">账号与微信绑定后，此微信即与账号唯一对应，不可变更</p> 
     </div>
</template>



<script>
export default {
    name:"loginempower"


}
</script>

<style scoped>
.login{text-align: center; padding: 30% 0 0 0;}
h3{color:#222;font-size: 25px; font-weight: 400;}
.img{text-align: center;}
.img img{ width: 96px; height: 96px;}
.btn{margin: 110px 40px 0 40px ;}
.LoginBtn{background: #6DB41F; display: block;border-radius:25px;height: 50px; }
.LoginBtn i{
  width: 30px; height: 50px; display: inline-block; 
  background: url(../assets/images/wx.png) no-repeat center;
  background-size: contain;

  vertical-align: middle;
  }
.LoginBtn span{ display: inline-block; color: white;font-size: 18px; line-height: 50px;  vertical-align: middle; margin: 0 0 0 5px;}
.tips {margin: 15px 60px; color: #9b9b9b; font-size: 12px;}
</style>
