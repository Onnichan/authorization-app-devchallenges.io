<script setup>
import OrganismProfileForm from "../organisms/Form/OrganismProfileForm.vue";

defineProps(["user"]);
</script>
<template>
  <OrganismProfileForm :user="user"></OrganismProfileForm>
</template>
