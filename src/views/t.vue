<template>
  <component v-bind="init(x)">
    {{x}}
  </component>
</template>
<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator'
@Component
export default class T extends Vue{
  @Prop() private x!:string
 
 
    init() {

      return /^https?:\/\//.test(this.x) ? {
        is: 'a',
        href: this.x,
        target: '_blank'
      } : {
          is: 'router-link',
          to: this.x
        }

    }
  }
 
</script>
