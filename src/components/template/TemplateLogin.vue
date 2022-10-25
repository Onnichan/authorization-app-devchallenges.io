<script setup>
import OrganismLoginForm from "../organisms/Form/OrganismLoginForm.vue";

const props = defineProps(["icons"]);
</script>
<template>
  <OrganismLoginForm :icons="props.icons"></OrganismLoginForm>
</template>
