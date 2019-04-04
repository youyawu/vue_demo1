<template>
  <div class="container">
    <div class="header">
      头部
    </div>
    <div class="nav h100">
      <el-scrollbar>

        <m-nav></m-nav>
      </el-scrollbar>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">尾部</div>
  </div>
</template>
 <script  lang="ts">
import './index.css'
import { Component, Prop, Vue } from "vue-property-decorator";
import mNav from './nav.vue'
@Component({
  components: {
    mNav
  }
})
export default class layout extends Vue {

}
 
</script>
 
 
 