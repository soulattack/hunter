<template>
  <div class="searchWrap">
       <ul class="search">
           <li class="messageWrap"><i class="message"></i></li>  
           <li class="inputWrap"> <i class="icon_search"></i> <input type="text" class="searchtext"> </li>  
           <li class="submitWrap"><i class="submit"></i></li>  
       </ul>
  </div>    
</template>

<script>
export default {
    
}
</script>

<style  scoped>
 .search{display: flex; height: 50px; align-items: center; background: #FE7C3E;
    position: fixed;
    width: 100%;
    top: 0;
    z-index:10;
 }
 .search li{}
 .messageWrap{padding: 0 10px;}
 .inputWrap{
     display: flex;
     flex:1;
    justify-items: center;
    align-items: center;
    padding: 0 10px;
    border-radius: 15px;
    background:white;
}
 .icon_search{
     height: 15px; 
     width: 15px;
     display: inline-block;
     
     background: white url(../../assets/images/search.png) no-repeat 0 center;
    background-size:cover ;
     border: none;
 }
.searchtext{ height: 30px;border: none;padding: 0 5px;}

 .message{ 
     display: block; width: 24px; height: 24px; background: url(../../assets/images/message.png) no-repeat;
     background-size:cover ;
 }
 
 .submitWrap{margin: 0 10px;}
 .submit{
      display: block; width: 42px; height: 24px; background: url(../../assets/images/publish.png) 0 center no-repeat;
     background-size:contain ;
 }
</style>

