<template>
  <div class="gie-input">
    <input ref="inputRef" v-model="state" class="gie-input__control" type="text" :disabled="props.disabled" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { InputEmits, InputProps } from './input';

defineOptions({
  name: 'GieInput'
});

const emit = defineEmits<InputEmits>();

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  disabled: false
});

const state = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  }
});

const inputRef = ref<HTMLInputElement>();

function focus() {
  inputRef.value?.focus();
}

defineExpose({
  focus
});
</script>
