<script setup>
import AtomBaseButton from "../../atoms/Buttons/AtomBaseButton.vue";

const props = defineProps({
  icons: Array,
});

const iconsFiltered = () =>
  props.icons.filter((icon) => !icon.name.includes("lock", "email"));
</script>
<template>
  <div>
    <AtomBaseButton
      type="button"
      v-for="(icon, index) in iconsFiltered()"
      :key="index"
    >
      <component :is="icon.icon"></component>
    </AtomBaseButton>
  </div>
</template>
