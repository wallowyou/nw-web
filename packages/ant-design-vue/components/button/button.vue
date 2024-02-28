<template>
  <Button v-bind="$attrs"></Button>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
defineOptions({
  name: 'NwButton',
  inheritAttrs: false
});
</script>

<style lang="scss"></style>
