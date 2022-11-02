<script setup>
import { ref } from "vue";
import AtomBaseButton from "../../atoms/Buttons/AtomBaseButton.vue";
import AtomInput from "../../atoms/Input/AtomInput.vue";
import AtomText from "../../atoms/Text/AtomText.vue";
import AtomLeftArrowIcon from "../../atoms/Icons/AtomLeftArrowIcon.vue";
import UserService from "../../../services/user.service";

const props = defineProps(["user"]);
const name = ref(props.user.name);
const bio = ref("");
const phone = ref("");
const email = ref(props.user.email);
const password = ref("");

defineEmits(["back"]);

const handleSubmit = async () => {
  const res = await UserService.update({
    id: props.user.id,
    oauth_id: props.user.oauth_id,
    name: name.value,
    description: bio.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  });
  console.log(res);
};
</script>
<template>
  <div class="w-3/5 mx-auto">
    <div
      class="flex items-center gap-2 mb-5 cursor-pointer"
      @click="$emit('back')"
    >
      <AtomLeftArrowIcon class="rotate-180 fill-sky-500" height="15px" />
      <AtomText class="text-sky-500">Back</AtomText>
    </div>
  </div>
  <form
    class="border-0 md:border md:border-gray-400 md:rounded-xl w-full md:w-3/5 md:mx-auto px-12 py-8 flex flex-col gap-5"
    @submit.prevent="handleSubmit"
  >
    <div>
      <AtomText class="text-2xl" tag="h1">Change Info</AtomText>
      <AtomText class="text-sm text-gray-400" tag="h1"
        >Changes will be reflected to every services</AtomText
      >
    </div>
    <div class="flex items-center gap-x-10">
      <label for="file-input">
        <img
          class="w-20 h-20 block rounded-lg hover:cursor-pointer"
          :src="props.user.image ? props.user.image : ''"
          alt=""
        />
      </label>
      <input class="hidden" type="file" name="" id="file-input" />
      <AtomText class="text-gray-400">CHANGE PHOTO</AtomText>
    </div>
    <div class="flex flex-col gap-1 w-7/12">
      <AtomText class="text-sm" tag="label">Name</AtomText>
      <AtomInput
        class="border border-black rounded-xl px-5 py-3 placeholder:text-sm"
        v-model="name"
        placeholder="Enter your name..."
      ></AtomInput>
    </div>
    <div class="flex flex-col gap-1 w-7/12">
      <AtomText class="text-sm" tag="label">Bio</AtomText>
      <textarea
        class="border border-black rounded-xl p-5 placeholder:text-sm"
        rows="2"
        v-model="bio"
        placeholder="Enter your bio..."
      ></textarea>
    </div>
    <div class="flex flex-col gap-1 w-7/12">
      <AtomText class="text-sm" tag="label">Phone</AtomText>
      <AtomInput
        type="number"
        class="border border-black rounded-xl px-5 py-3 placeholder:text-sm"
        v-model="phone"
        min="8"
        placeholder="Enter your phone..."
        required
      ></AtomInput>
    </div>
    <div class="flex flex-col gap-1 w-7/12">
      <AtomText class="text-sm" type="email" tag="label">Email</AtomText>
      <AtomInput
        class="border border-black rounded-xl px-5 py-3 placeholder:text-sm"
        v-model="email"
        placeholder="Enter your email..."
      ></AtomInput>
    </div>
    <div class="flex flex-col gap-1 w-7/12">
      <AtomText class="text-sm" tag="label">Password</AtomText>
      <AtomInput
        class="border border-black rounded-xl px-5 py-3 placeholder:text-sm"
        type="password"
        v-model="password"
        placeholder="Enter your password..."
        autocomplete
      ></AtomInput>
    </div>
    <div class="w-3/5">
      <AtomBaseButton class="bg-blue-500 px-6 py-2 rounded-lg text-white"
        >Save</AtomBaseButton
      >
    </div>
  </form>
</template>
