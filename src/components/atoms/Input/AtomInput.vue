<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
