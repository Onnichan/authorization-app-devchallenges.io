<script>
export default {
  inheritAttrs: false,
}
</script>
<!-- eslint-disable import/first -->
<script setup>
import AtomInput from '../../atoms/Input/AtomInput.vue';

const props = defineProps(["type"])
</script>
<template>
  <div class="relative">
    <AtomInput :class="$attrs.class" :type="props.type" v-bind="$attrs"></AtomInput>
    <div class="absolute top-1/4 left-2">
      <slot></slot>
    </div>
  </div>
</template>