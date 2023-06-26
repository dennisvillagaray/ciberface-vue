<template>
  <div class="p-4">
    <div class="relative p-2 mb-4 border border-gray-300 rounded">
      <div
        class="w-full text-base outline-none"
        contenteditable="true"
        ref="postContent"
        @input="onPostInput"
      ></div>
      <span
        v-if="showPlaceholder"
        class="absolute text-base text-gray-700 -translate-y-1/2 pointer-events-none top-1/2"
        >¿Qué estás pensando Dennis?</span
      >
    </div>
    <div class="flex items-center justify-end">
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        @click="sendPost"
      >
        <IconPost />
        publicar
      </button>
    </div>
  </div>
</template>

<script>
import IconPost from "vue-material-design-icons/Post.vue";

export default {
  name: "PostNewPost",
  components: { IconPost },
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newPostContent: "",
      showPlaceholder: true
    };
  },
  methods: {
    onPostInput() {
      this.newPostContent = this.$refs.postContent.innerText;
      this.showPlaceholder = this.newPostContent === "";
    },
    sendPost() {
      if (this.newPostContent === "") {
        return;
      }
      const newPost = {
        author: {
          name: this.currentUser.name,
          avatar: this.currentUser.avatar
        },
        timestamp: new Date().toLocaleString(),
        content: this.newPostContent,
        image: null,
        comments: [],
        currentUser: {
          name: this.currentUser.name,
          avatar: this.currentUser.avatar
        },
        newComment: ""
      };
      this.$emit("new-post", newPost);

      this.newPostContent = "";
      this.showPlaceholder = this.newPostContent === "";
      this.$refs.postContent.innerText = "";
    }
  },
  computed: {
    postPlaceholder() {
      return this.newPostContent ? "" : "Escribe tu post...";
    }
  }
};
</script>
