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
      <ElMenuItem
        index="/about/index"
        route="/about/index"
      >
        about
      </ElMenuItem>
      <ElMenuItem
        index="/home/index"
        route="/home/index"
      >
        home
      </ElMenuItem>

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
      <ElMenuItem index="4-1">4-1</ElMenuItem>
      <el-submenu index="4-2">
        <template slot="title">4-2</template>
        <ElMenuItem index="4-2-1">4-2-1</ElMenuItem>
        <ElMenuItem index="4-2-1">4-2-2</ElMenuItem>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script  lang="ts"  >
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Nav extends Vue {
  private opens: string[] = ["1"];
  @Prop() private list!: object[];
  created() {
    console.log(this);
  }
}
</script>

