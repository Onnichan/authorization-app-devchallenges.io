<script setup>
import AtomBaseButton from '../../atoms/Buttons/AtomBaseButton.vue';
import AtomInput from '../../atoms/Input/AtomInput.vue';
import AtomText from '../../atoms/Text/AtomText.vue';


</script>
<template>
  <form class="border border-gray-400 rounded-xl px-12 py-8 flex flex-col gap-5">
    <div>
      <AtomText class="text-2xl" tag="h1">Change Info</AtomText>
      <AtomText class="text-sm text-gray-400" tag="h1">Changes will be reflected to every services</AtomText>
    </div>
    <div class="flex items-center gap-x-10">
      <label for="file-input">
        <img class="w-20 h-20 block rounded-lg hover:cursor-pointer" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2018/11/devil-may-cry-5.jpg?itok=U3-6Fzrv" alt="">
      </label>
      <input class="hidden" type="file" name="" id="file-input">
      <AtomText class="text-gray-400">CHANGE PHOTO</AtomText>
    </div>
    <div class="flex flex-col gap-1">
      <AtomText class="text-sm" tag="label">Name</AtomText>
      <AtomInput class="border border-black rounded-xl px-5 py-3 placeholder:text-sm" placeholder="Enter your name..."></AtomInput>
    </div>
    <div class="flex flex-col gap-1">
      <AtomText class="text-sm" tag="label">Bio</AtomText>
      <textarea class="border border-black rounded-xl p-5 placeholder:text-sm" rows="2" placeholder="Enter your bio..."></textarea>
    </div>
    <div class="flex flex-col gap-1">
      <AtomText class="text-sm" tag="label">Phone</AtomText>
      <AtomInput class="border border-black rounded-xl px-5 py-3 placeholder:text-sm" placeholder="Enter your phone..."></AtomInput>
    </div>
    <div class="flex flex-col gap-1">
      <AtomText class="text-sm" type="email" tag="label">Email</AtomText>
      <AtomInput class="border border-black rounded-xl px-5 py-3 placeholder:text-sm" placeholder="Enter your email..."></AtomInput>
    </div>
    <div class="flex flex-col gap-1">
      <AtomText class="text-sm" tag="label">Password</AtomText>
      <AtomInput class="border border-black rounded-xl px-5 py-3 placeholder:text-sm" type="password" placeholder="Enter your password..."></AtomInput>
    </div>
    <div>
      <AtomBaseButton class="bg-blue-500 px-6 py-2 rounded-lg text-white" type="button">Save</AtomBaseButton>
    </div>
  </form>
</template>