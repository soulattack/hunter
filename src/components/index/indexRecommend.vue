<template>
    <div class="indexRecommend">
        <div>
            <h1 class="tle">
                <span> <b>推荐</b>  </span>
                <router-link class="more" to="">查看更多<i></i></router-link>
            </h1>
            <div style="overflow:hidden" class="all" >
                   <div class="wrapper" ref="ws" > 
                        <ul class="content" ref="cc">
                            <li  v-for="{item,index} in 5" :key=index class="rcItem" >
                              <dl>
                                <dt> <img src="../../assets/images/uheader.png" alt=""></dt>
                                <dd class="name elli">名字名字名字</dd>
                                <dd class="msg">
                                   <span>下载注册</span>
                                   <span>下载注册</span>
                                </dd>
                                <dd class="price">+1.23</dd>
                              </dl>

                            </li>                           
                      </ul>
                   </div>

            </div>
        
        </div>
    </div>
</template>

<script>
 import XScroll from 'better-scroll' //导入better-scroll

  export default {
    name:"indexRecommend",


    mounted() {
      let iiw=this.$refs.ws.offsetWidth/2.5;
      console.log("iiw"+iiw);
      let ww=5*iiw;
      this.$refs.cc.style.width=ww+"px"
       this.$nextTick(() => {    
         
          this.xs=new XScroll(this.$refs.ws,
                {
                  startX: 0,  
                  click: true,
                  scrollX: true,
                  scrollY: false,
                  eventPassthrough: 'vertical'
                }
            );

        })


      

   
      
    }
  }

</script>

<style  scoped>
  .tle{ position: relative; font-size: 14px;text-align: center; padding: 9px 0;}
  .tle span{position: relative; display: inline-block; width: 100px;}
  .tle span b{position: relative; padding: 0 5px; background: white; color:#222;font-size: 14px;}
  .tle span::before{
         content: "";
    position: absolute;
    border-bottom: 1px solid #8E8E93;
    height: 2px;
    
    display: block;
   width: 100%;
   top:8px;
  }
  .tle a{ position: absolute; right: 10px;color: #9b9b9b; display: block; top:12px; font-size: 12px;}
  .more i{
      display: block; width: 12px; height: 12px;
      background: url(../../assets/images/arrowleft.png) no-repeat center;
      background-size: cover;
      float: right;
      margin: 2px;
  }

  .all{overflow: hidden;margin: 0 14px;}
  .wrapper{ width: 100%; background: lightblue;}
  
  .content{  background: #00aced; }
  .wrapper li{
 
       width: 100px;
    
        float: left; 
       border:1px solid #eee;
       margin: 0 20px 0 0;
       box-shadow:0px 2px 4px 0px rgba(0,0,0,0.09);
      border-radius:4px;
       
      }
    .rcItem dl{}  
    .rcItem dl dt{padding: 5px 0; text-align: center;}
    .rcItem dl dt img{ width: 35px;}  
    .rcItem dl dd { text-align: center;}  
    .rcItem dl dd.name {font-size: 12px; color:#222; padding: 0 3px;}  
    .rcItem dl dd.msg {                 
                font-size: 6px;               
               }                
    .rcItem dl dd.msg span { padding: 0 2px ; color:orange;background: #fadab1;  }  
   .rcItem dl dd.price{ color:#E62739;font-size: 15px; padding: 4px 0;}
</style>