<template>
  <div class="container">
    <div class="header">头部</div>
    <div class="nav">
      <div class="n">nav</div>
    </div>
        <!-- <el-scrollbar wrap-class="list"  class="nav" >
         <div v-for="x in 100" :key="x">{{x}}</div>
       
        
        </el-scrollbar> -->
    
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">尾部</div>
  </div>
</template>
<style>
 
.list{
  height: 100%;
  background: red;
}
.n{
  height: 100%;
}
</style>

