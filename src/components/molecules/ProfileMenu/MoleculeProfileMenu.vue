<script setup>
import AtomText from "../../atoms/Text/AtomText.vue";
import AtomBottomArrowIcon from "../../atoms/Icons/AtomBottomArrowIcon.vue";

defineProps(["user"]);
</script>
<template>
  <div class="flex gap-3 items-center p-2">
    <img class="block rounded-md" width="40" :src="user.image" alt="" />
    <AtomText class="font-bold text-sm hidden sm:block">{{
      user.name
    }}</AtomText>
    <AtomBottomArrowIcon class="rotate-90 hidden sm:block" />
  </div>
</template>
