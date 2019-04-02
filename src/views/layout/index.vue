<template>
  <div class="container">
    <div class="header">
      <div class="_header">头部xx</div>
    </div>
 
        <el-scrollbar   class="nav"  wrap-class="sdf">
         <div v-for="x in 30" :key="x" class="x">{{x}}</div>
       
        
        </el-scrollbar>
    
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">尾部</div>
  </div>
</template>
<style>
 
.x{
  background: red;
  margin: 5px
}
._header{
  width: 90%;
  height: 90%;
  background: #000;
  color: #fff;
}
.sdf{
  color: aqua;
  position: absolute;
  width: 100%;
}
</style>

