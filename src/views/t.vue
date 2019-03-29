<template>
  <component v-bind="init(x)">
    {{x}}
  </component>
</template>
<script>
export default {
  props: {
    x: {
      type: String,
      required: true
    }
  },
  methods: {
    init(x) {

      return /^https?:\/\//.test(x) ? {
        is: 'a',
        href: x,
        target: '_blank'
      } : {
          is: 'router-link',
          to: x
        }

    }
  }
}
</script>
