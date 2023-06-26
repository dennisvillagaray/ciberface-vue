<template>
  <a
    :href="`/chat/${id}`"
    class="flex flex-row items-center px-2 py-4 border-b-2 hover:border-blue-400 hover:border-l-4"
    :class="selectClass"
  >
    <div class="w-1/4">
      <ImageRounded :image="avatar" size="small" />
    </div>
    <div class="w-full">
      <div class="text-lg font-semibold">{{ name }}</div>
      <span class="text-gray-500">{{
        `${formatedMessage} ${formatedDate}`
      }}</span>
    </div>
  </a>
</template>

<script>
import ImageRounded from "@/components/atoms/ImageRounded.vue";

export default {
  name: 'UserChat',
  components: { ImageRounded },
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    avatar: {
      type: String,
      default: 'https://source.unsplash.com/_7LbC5J-jw4/600x600'
    },
    message: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Usuario desconocido'
    },
    isSelect: {
      type: Boolean,
      default: false
    }
  },
  data() {

  },
  computed: {
    formatedMessage() {
      return this.message.length > 20 ? `${this.message.substring(0, 20)}... -` : this.message
    },
    formatedDate() {
      return this.date
    },
    selectClass() {
      return this.isSelect ? 'border-blue-400 border-l-4' : ''
    }
  },
}
</script>