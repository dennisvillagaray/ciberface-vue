<template>
  <section class="relative w-full h-32 bg-gray-800 rounded-b-2xl">
    <div class="relative flex items-center justify-start h-full pl-20">
      <div
        class="object-contain overflow-hidden translate-y-1/2 border-8 border-white rounded-full left-20"
      >
        <ImageRounded :image="userImage" size="large" />
      </div>
      <div class="items-center ml-10 font-sans text-3xl font-medium">
        <span class="text-white">{{ fullName }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import ImageRounded from "@/components/atoms/ImageRounded.vue";

import { mapState } from "vuex";

export default {
  name: "ProfileHeader",
  components: {
    ImageRounded,
  },
  computed: {
    ...mapState({
      fullName: state => {
        const surname = state.user.userCurrent.surname.split(' ')[0]
        return `${state.user.userCurrent.name} ${surname}`
      },
      userImage: state => state.user.userCurrent.avatar
    }),
  }
}
</script>