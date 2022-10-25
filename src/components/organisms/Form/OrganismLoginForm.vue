<script setup>
import AtomBaseButton from "../../atoms/Buttons/AtomBaseButton.vue";
import AtomLogo from "../../atoms/Logo/AtomLogo.vue";
import AtomText from "../../atoms/Text/AtomText.vue";
import MoleculeSocialIcons from "../../molecules/SocialIcons/MoleculeSocialIcons.vue";
import MoleculeTextField from "../../molecules/TextField/MoleculeTextField.vue";

const props = defineProps({ icons: Array });
</script>
<template>
  <form class="p-14 border border-gray-500 rounded-3xl flex flex-col gap-5">
    <AtomLogo></AtomLogo>
    <AtomText tag="h1" class="mt-4 font-bold text-lg"
      >Join thousands of learners from around the world</AtomText
    >
    <AtomText class="text-md" tag="p">
      Master web development by making real-life projects. There are multiple
      paths for you to choose
    </AtomText>
    <div class="mt-4 flex flex-col gap-3">
      <MoleculeTextField
        class="w-full border border-gray-500 p-2 rounded-lg pl-12"
        placeholder="Email"
      >
        <component
          class="fill-gray-500"
          :is="props.icons[0].icon"
          width="20px"
          height="20px"
        />
      </MoleculeTextField>
      <MoleculeTextField
        class="w-full border border-gray-500 p-2 rounded-lg pl-12"
        type="password"
        placeholder="Password"
      >
        <component
          class="fill-gray-500"
          :is="props.icons[1].icon"
          width="20px"
          height="20px"
        />
      </MoleculeTextField>
    </div>
    <AtomBaseButton class="bg-sky-600 p-2 rounded-md text-white w-full">
      Start coding now
    </AtomBaseButton>
    <AtomText class="mt-5 text-center text-gray-600"
      >or continue with these social profile</AtomText
    >
    <MoleculeSocialIcons class="flex justify-center gap-5" :icons="props.icons"></MoleculeSocialIcons>
    <AtomText class="text-center">Already a member?</AtomText>
  </form>
</template>
