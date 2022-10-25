<script setup>
defineProps({
  tag: {
    type: String,
    default: "span"
  }
});
</script>
<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>
