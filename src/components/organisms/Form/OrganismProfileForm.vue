<script setup>
import AtomText from "../../atoms/Text/AtomText.vue";
</script>
<template>
  <div class="border border-gray-400 rounded-lg">
    <div class="px-10 py-5">
      <AtomText tag="h1">Profile</AtomText>
      <AtomText>Some info may be visible to other people</AtomText>
    </div>
    <div>
      <AtomText>PHOTO</AtomText>
      <img src="" alt="" />
    </div>
    <div>
      <AtomText>NAME</AtomText>
      <AtomText>Xanthe Neal</AtomText>
    </div>
    <div>
      <AtomText>BIO</AtomText>
      <AtomText>I am a software developer</AtomText>
    </div>
    <div>
      <AtomText>PHONE</AtomText>
      <AtomText>xanthe.neal@gmail.com</AtomText>
    </div>
    <div>
      <AtomText>PASSWORD</AtomText>
      <AtomText>***********</AtomText>
    </div>
  </div>
</template>
