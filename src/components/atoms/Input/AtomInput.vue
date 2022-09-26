<script setup>
defineProps({
  type: {
    type: String,
    validator(value){
      return ['text','number','search'].includes(value);
    },
    required: false,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
  },
  required:{
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>
<template>
  <input class="border-gray-500" :type="type" :placeholder="placeholder" :required="required"/>
</template>
