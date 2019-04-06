<template>
  <el-menu
    :default-active="$route.path"
    :default-openeds="opens"
    :router="true"
  >
    <ElSubmenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        导航一 
      </template>
      <el-menu-item-group>
        <template slot="title">分组1</template>
        <ElMenuItem index="/about/index" route="/about/index">
       about
        </ElMenuItem>
        <ElMenuItem index="/home/index" route="/home/index">
          home
        </ElMenuItem>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">

        <!-- <ElMenuItem index="1-3">1-3</ElMenuItem> -->
        <el-submenu index="1-3">
          <template slot="title">1-3</template>
          <el-menu-item-group title="分组2-1">
            <el-menu-item index="1-3-1">1-3-1</el-menu-item>
            <el-menu-item index="1-3-2">1-3-2</el-menu-item>
            <el-menu-item index="1-3-3">1-3-3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu-item-group>
    </ElSubmenu>

    <el-submenu index="2">
      <template slot="title">导航二</template>
      <ElMenuItem index="2-1">2-1</ElMenuItem>
    </el-submenu>
    <el-menu-item index="3">
      导航三
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">导航四</template>
      <el-menu-item-group title="分组">
        <ElMenuItem index="4-1">4-1</ElMenuItem>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script  lang="ts"  >
import { Component,Vue } from 'vue-property-decorator'
@Component
export default class Nav extends Vue {
private opens:string[] = ['1']
}
</script>

