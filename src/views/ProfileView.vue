<script setup>
import { onMounted } from "vue";
import TemplateProfileForm from "../components/template/TemplateProfileForm.vue";
import OrganismNavbar from "../components/organisms/Navbar/OrganismNavbar.vue";
import AuthService from "../services/auth.service";
import store from "../store/index";

// const user = ref(null);

onMounted(async () => {
  const resp = await AuthService.oauthSuccessLogin();
  if (resp) {
    store.commit("auth/updateUser", resp);
  }
});
</script>
<template>
  <OrganismNavbar :user="store.state.auth.user" />
  <TemplateProfileForm :user="store.state.auth.user"></TemplateProfileForm>
</template>
