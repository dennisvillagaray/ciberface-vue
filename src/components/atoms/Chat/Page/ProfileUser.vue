<template>
  <div class="w-1/4 px-5 border-l-2">
    <div class="flex flex-col items-center text-center">
      <div class="py-4 text-xl font-semibold">{{ name }}</div>
      <img :src="avatar" class="object-cover w-24 h-24 rounded-full" alt="" />
      <a :href="linkProfile" class="py-4 font-semibold text-blue-500"> Visitar perfil</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUser',
  props: {
    name: {
      type: String,
      default: 'Mern Stack Group'
    },
    avatar: {
      type: String,
      default: 'https://source.unsplash.com/L2cxSuKWbpo/600x600'
    },
    linkProfile: {
      type: String,
      default: 'https://source.unsplash.com/L2cxSuKWbpo/600x600'
    },
  }
}
</script>