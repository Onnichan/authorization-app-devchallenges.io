<script setup>
import { onMounted} from "vue";
import TemplateProfileForm from "../components/template/TemplateProfileForm.vue";
import AuthService from "../services/auth.service";
import store from "../store/index";

// const user = ref(null);

onMounted(async () => {
  // console.log("mounted");
  const resp = await AuthService.oauthSuccessLogin();
  if(resp){
    console.log(resp);
    store.commit("auth/updateUser", resp);
  }
  // console.log(store.state.auth.user);
});
</script>
<template>
  <TemplateProfileForm :user="store.state.auth.user"></TemplateProfileForm>
</template>
