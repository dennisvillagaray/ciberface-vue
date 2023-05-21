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

      // Agregar el post para consumir servicio
      const newPost = {
        id: 2,
        content: this.newPostContent,
        timestamp: new Date().toLocaleString(),
        author: {
          name: "Dennis",
          avatar: "https://i.pravatar.cc/100?img=4"
        },
        image: null,
        currentUser: {
          name: "Dennis",
          avatar: "https://i.pravatar.cc/100?img=4"
        },
        comments: [],
        newComment: ""
      };
      this.$emit("new-post", newPost);

      console.log("Nuevo post:", newPost);

      this.newPostContent = "";
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
