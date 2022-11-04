<script setup>
import AtomBaseButton from "../../atoms/Buttons/AtomBaseButton.vue";

const props = defineProps({
  icons: Array,
});

const handleOauth = (endpoint) => {
  console.log("endpoint", endpoint);
  window.open(endpoint, "_self");
};

const iconsFiltered = () =>
  props.icons.filter((icon) => !icon.name.includes("lock", "email"));
</script>
<template>
  <div>
    <AtomBaseButton
      type="button"
      v-for="(icon, index) in iconsFiltered()"
      :key="index"
      @click="handleOauth(icon.endpoint)"
    >
      <component :is="icon.icon"></component>
    </AtomBaseButton>
  </div>
</template>
