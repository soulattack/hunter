<template>
     <div class="recharge">
         <div class="rechargeCount">
             <span>充值金额</span>  <input type="text">
         </div>
             
         <div class="rechargeType">
             <h3>请选择充值账户</h3>
             <ul>
                 <li class="ali">
                     <i class="rtypeAlipay"></i><span>支付宝支付</span><b class="mks on"></b>
                 </li>
                 <li class="wx">
                     <i class="rtypeWX"></i><span>微信支付</span><b class="mks"></b>
                 </li>
             </ul>
         </div>    
         <div class="confirmBottArea">
             <input type="button" class="btnConfirm" value="确认">
         </div>

     </div>
</template>



<script>
export default {
    name:"recharge"


}
</script>

<style scoped>
  .recharge{height: 100%; overflow: hidden; background: white;}
  .rechargeCount {border-bottom:1px solid #eee; padding:20px 0 30px 0; margin: 0 20px;}
  .rechargeCount span{font-size: 16px;color:#222; font-weight: 600;}
  .rechargeCount input{font-size: 16px;color:#222; border:none}

  .rechargeType{ margin: 0 20px;}
  .rechargeType h3{  font-size: 16px;color:#222; font-weight: 600;}

 .rechargeType li{display: flex; align-items: center;padding: 12px 0;border-top:1px solid #eee}
 .rechargeType li i{display: flex; background-size: cover;display: block; width: 36px; height: 36px;}

  .rtypeAlipay {  background:url(../assets/images/payali.png);}
  .rtypeWX {  background:url(../assets/images/paywx.png);}

    .rechargeType li  span{flex:1; color:#222; font-size: 16px; margin: 0 0 0 10px;}
 .mks{ width: 15px; height:15px;border: 1px solid #FE7C3E; background: white; border-radius:50%;position: relative;}
 .mks.on::after{
  content:"";
  position: absolute;
  width: 13px;
  height: 13px;
  background:#FE7C3E;
  left: 1px; top:1px;
  border-radius: 50%;
 }
  .confirmBottArea{position: absolute; bottom: 0;width: 100%;}
  .confirmBottArea input{ display: block;width: 100%; border:none;background: #FE7C3E;height: 50px; font-size: 18px; color: white;}
</style>
