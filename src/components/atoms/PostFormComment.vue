<template>
  <form class="mt-4">
    <div class="flex items-center">
      <img
        class="w-8 h-8 rounded-full"
        :src="currentUser.avatar"
        alt="Avatar"
      />

      <div class="relative w-full py-2 ml-2">
        <div
          class="p-2 ml-2 border border-gray-300 rounded outline-none"
          contenteditable="true"
          @input="onCommentInput"
          ref="commentInput"
        ></div>
        <span
          v-if="showPlaceholder"
          class="absolute p-4 text-base text-gray-700 -translate-y-1/2 pointer-events-none top-1/2"
          >Escribe un comentario...</span
        >
      </div>

      <button
        type="button"
        @click="addComment"
        class="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        <IconSend />
      </button>
    </div>
  </form>
</template>

<script>
import IconSend from "vue-material-design-icons/Send.vue";

export default {
  name: "PostFormComment",
  components: {
    IconSend
  },
  props: {
    currentUser: {
      type: Object,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newComment: "",
      showPlaceholder: true
    };
  },
  methods: {
    onCommentInput() {
      this.newComment = this.$refs.commentInput.innerText;
      this.showPlaceholder = this.newComment === "";
    },
    clearInput() {
      this.$refs.commentInput.innerText = "";
    },
    addComment() {
      if (this.newComment !== "") {
        this.post.comments.push({
          id: this.post.comments.length + 1,
          user: {
            name: this.currentUser.name,
            avatar: this.currentUser.avatar
          },
          content: this.newComment
        });
        this.newComment = "";
        this.clearInput();
      }
    }
  }
};
</script>
