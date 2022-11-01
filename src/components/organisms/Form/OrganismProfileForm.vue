<script setup>
import { ref } from "vue";
import AtomText from "../../atoms/Text/AtomText.vue";
import AtomBaseButton from "../../atoms/Buttons/AtomBaseButton.vue";
import OrganismEditProfile from "./OrganismEditProfile.vue";

const showEditProfile = ref(false);

defineProps(["user"])

const handleEditProfile = (value) => {
  showEditProfile.value = value;
};
</script>
<template>
  <div v-if="!showEditProfile" class="border border-gray-400 rounded-xl">
    <div class="px-10 py-8 flex justify-between">
      <div>
        <AtomText class="text-2xl" tag="h1">Profile</AtomText>
        <AtomText class="text-gray-500 text-sm"
          >Some info may be visible to other people</AtomText
        >
      </div>
      <div class="flex items-center">
        <AtomBaseButton
          type="button"
          class="border border-gray-500 rounded-xl px-8 py-1 text-gray-500"
          @click="handleEditProfile(true)"
          >Edit</AtomBaseButton
        >
      </div>
    </div>
    <div class="px-10 py-4 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >PHOTO</AtomText
      >
      <img
        class="block w-20 h-20 rounded-md"
        :src="user.image"
        alt=""
      />
    </div>
    <div class="px-10 py-6 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >NAME</AtomText
      >
      <AtomText>{{user.name}} {{user.lastname}}</AtomText>
    </div>
    <div class="px-10 py-6 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >BIO</AtomText
      >
      <AtomText class="w-3/5"
        >I am a software developer and big fan of devchallenges...</AtomText
      >
    </div>
    <div class="px-10 py-6 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >PHONE</AtomText
      >
      <AtomText></AtomText>
    </div>
    <div class="px-10 py-6 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >EMAIL</AtomText
      >
      <AtomText>{{user.email}}</AtomText>
    </div>
    <div class="px-10 py-6 flex border-t">
      <AtomText class="text-gray-300 text-sm w-2/5 flex items-center"
        >PASSWORD</AtomText
      >
      <AtomText></AtomText>
    </div>
  </div>
  <OrganismEditProfile v-else :user="user"/>
</template>
