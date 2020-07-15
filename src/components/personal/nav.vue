<template>
   <div class="nav">
      <ul class="navList">
          <li>
               <router-link to="">
                    <i class="i_mytask"></i><span>我的任务</span>
               </router-link>
          </li>    
          <li>
               <router-link to="">
                    <i class="i_publish"></i><span>发布任务</span>
               </router-link>
          </li>    
          <li>
               <router-link to="">
                    <i class="i_manage"></i><span>管理任务</span>
               </router-link>
          </li>    
     </ul>    
   </div>    
</template>


<script>

export default {
    name:"personalNav"
}
</script>

<style  scoped>
.nav{ margin: 10px 0 0 0;  background: white; padding: 10px 0 20px 0;}
   .navList{display: flex;  margin: 0 15px;}
   .navList li{flex:1; text-align: center;}
   .navList li a{display: block;}
   .navList li a span{ font-size:14px; color:#222;}
   .navList li a i{display: block; margin: 0 auto 5px; width: 50px;height: 50px; background-size:cover ; background-repeat:no-repeat ; }
   .navList li a i.i_mytask{ background-image:url(../../assets/images/personal/mytask.png);}
   .navList li a i.i_publish{ background-image:url(../../assets/images/personal/publish.png);}
   .navList li a i.i_manage{ background-image:url(../../assets/images/personal/manage.png);}

</style>