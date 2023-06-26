<template>
  <div class="flex items-center justify-between p-2 border-b">
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full" :src="avatar" />
      <div class="pl-2">
        <div class="font-semibold">
          <a class="hover:underline" href="#">{{ name }}</a>
        </div>
        <div class="text-xs text-gray-600">{{ status }}</div>
      </div>
    </div>

    <div>
      <a
        class="inline-flex p-2 rounded-full hover:bg-indigo-50"
        :href="chatLink"
      >
        <OpenInNew />
      </a>
      <button
        @click="minimize"
        class="inline-flex p-2 rounded-full hover:bg-indigo-50"
        type="button"
      >
        <IconMinimize />
      </button>
      <button
        @click="close"
        class="inline-flex p-2 rounded-full hover:bg-indigo-50"
        type="button"
      >
        <IconClose />
      </button>
    </div>
  </div>
</template>


<script>
import OpenInNew from "vue-material-design-icons/OpenInNew.vue";
import IconClose from "vue-material-design-icons/Close.vue";
import IconMinimize from "vue-material-design-icons/WindowMinimize.vue";

export default {
  name: "ChatModalHeader",
  components: { OpenInNew, IconClose, IconMinimize },
  props: {
    chatId:{
      type: [String, Number],
      required: false,
    },
    name: {
      type: String,
      default: "Usuario",
    },
    avatar: {
      type: String,
      default: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    status: {
      type: String,
      default: "Online",
    }
  },
  data() {
    return {};
  },
  methods: {
    minimize() {
      this.$emit("minimizeChat")
    },
    close() {
      this.$emit("closeChat")

    },
  },
  computed: {
    chatLink() {
      return `/chat/${this.chatId}`;
    },
  },
}
</script>