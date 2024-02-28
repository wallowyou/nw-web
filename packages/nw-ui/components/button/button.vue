<template>
  <div class="nw-button">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// 代码
</script>
<script lang="ts">
export default {
  name: 'NwButton'
};
</script>

<style lang="scss">
:root {
  --nw-button-primary: #409eff;
  --nw-button-success: #67c23a;
  --nw-button-warning: #e6a23c;
  --nw-button-error: #f56c6c;
  --nw-button-info: #909399;
  --nw-button-text: #303133;
}

$primary: var(--nw-button-primary);
$success: var(--nw-button-success);
$warning: var(--nw-button-warning);
$error: var(--nw-button-error);
$info: var(--nw-button-info);
$text: var(--nw-button-text);
.nw-button {
  font-size: var(--nw-button-font-size);
  border: 0;
  border-radius: var(--nw-button-border-radius);
  white-space: nowrap;
  color: #ffffff;
  background: none;
  outline: none;
  cursor: pointer;
}
</style>
