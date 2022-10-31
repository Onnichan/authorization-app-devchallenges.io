<script setup>
import { onMounted, ref } from "vue";
import TemplateProfileForm from "../components/template/TemplateProfileForm.vue";

const user = ref(null);

onMounted(() => {
  console.log("mounted");
  fetch("http://localhost:4000/api/v1/auth/login/success")
    .then((success) => success.json())
    .then((resp) => (user.value = resp));
  console.log("user");
  // user.value = login.json();
});
</script>
<template>
  {{user}}
  <TemplateProfileForm></TemplateProfileForm>
</template>
