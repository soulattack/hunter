<template>
     <div class="">
        <div class="dsp">
            <dl>
                <dt>用户余额（元）</dt>
                <dd>
                    <div class="accountNum">0.00</div>
                     <div class="urOpt">
                      <router-link to="">充值保证金</router-link>
                      <router-link to="">申请退还</router-link>
                    </div>
                </dd>                             
            </dl>
         
        </div> 
          <div class="desc">
              <h2>保证金说明</h2>
              <ul>
                <li>1.说明1</li>
                <li>2.说明2</li>
                <li>3.说明3</li>

              </ul>
            </div>   
     </div>
       
    
</template>



<script>
export default {
    name:"deposit"


}
</script>

<style scoped>
   .dsp{
       position: relative;
       margin:15px 15px;
      border-radius:10px;
      padding: 20px 10px 15px 20px;
     background: linear-gradient(to right,#FFB372,#FE7C3E);
     }
 

    .dsp dt{color:white;font-size: 14px; margin-bottom:10px ;}
     .dsp dd{display: flex; align-items: center;justify-content: space-between;}
    .dsp .accountNum{ font-size:30px ; color: white; margin: 0px 0;}
    .urOpt a{ display: inline-block; padding: 4px 6px; margin-right: 10px;  background: white; color:#FE7C3E; border-radius:10px;}

    .desc{margin: 10px 25px 0;font-size: 16px;color:#222;overflow: hidden;}
    .desc h2{font-size: 16px;}


</style>
