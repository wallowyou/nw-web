<template>
  <Button v-bind="$attrs"><slot></slot></Button>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue'
defineOptions({
  name: 'NwButton',
  inheritAttrs: false
})
</script>

<style lang="scss"></style>
