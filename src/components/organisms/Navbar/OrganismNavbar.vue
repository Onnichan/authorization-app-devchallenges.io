<script setup>
import MoleculeProfileMenu from "../../molecules/ProfileMenu/MoleculeProfileMenu.vue";
import AtomLogo from "../../atoms/Logo/AtomLogo.vue";

defineProps(["user"]);
</script>
<template>
  <header class="flex items-center justify-between px-16 py-5">
    <AtomLogo />
    <MoleculeProfileMenu :user="user" />
  </header>
</template>
