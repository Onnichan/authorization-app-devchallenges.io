<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
});
</script>
<template>
  <input :type="type" />
</template>
