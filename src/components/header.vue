<template>
     <div class="header">
         <div class="back">
              <slot name="arrow"></slot>
         </div>
        <div class="tle">  <slot name="tle"></slot></div>
        <div class="opt">
             <slot name="opt"></slot>
        </div>
       
        
     </div>
</template>



<script>
export default {
    name:"headerx"


}
</script>

<style scoped>
   .header{
        height: 50px;
        background:#FE7C3E ;
        text-align: center;
        color: white;
        line-height: 50px;
        font-size: 20px;
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        z-index:10;
    }

    .back{ width: 100px; background: ;}
    .tle{ flex: 1;}
    .opt{width: 100px; background: ;}

</style>
