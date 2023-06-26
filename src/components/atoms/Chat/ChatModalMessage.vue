<template>
  <div class="w-full my-1.5">
    <div :class="messageClass">
      <div v-if="isAvatar" class="w-6 mr-2">
        <img :src="avatar" class="object-cover w-6 h-6 rounded-full" alt="" />
      </div>
      <div :class="messageContainerClass">
        <p>{{ message }}</p>
        <div :class="arrowClass" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatModalMessage",
  props: {
    avatar: {
      type: String,
      default: '',
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    isMe: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    messageClass() {
      return `flex ${this.isMe ? 'flex-row-reverse ml-auto mr-0' : ''} items-center w-11/12`
    },
    messageContainerClass() {
      return `relative p-2 mb-2 ${this.isMe ? 'text-gray-800 bg-indigo-100' : 'text-white bg-gray-800'} rounded-lg`
    },
    arrowClass() {
      return `absolute ${this.isMe ? 'right-0 translate-x-1/2 bg-indigo-100' : 'left-0 -translate-x-1/2 bg-gray-800'} w-2 h-2 transform rotate-45 top-1/2`
    },
    isAvatar() {
      return this.avatar !== '' && !this.isMe
    },
  }
}
</script>