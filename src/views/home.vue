<template>
  <div>
    home!!
    <t x="https://www.baidu.com/"></t>

 
  </div>
</template>
<script lang="ts">
 import  t from "./t.vue"
 import {Component,Vue } from "vue-property-decorator"
 @Component({
 components:{
   t
 }
 })
export default class Home extends Vue {

}
 
</script>

