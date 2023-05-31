<template>
  <form class="mt-4">
    <div class="flex items-center">
      <img class="w-8 h-8 rounded-full" :src="currentUser.avatar" alt="Avatar" />

      <div class="relative w-full py-2 ml-2">
        <div class="p-2 ml-2 border border-gray-300 rounded outline-none" contenteditable="true" @input="onCommentInput" ref="commentInput"></div>
        <span v-if="showPlaceholder" class="absolute p-4 text-base text-gray-700 -translate-y-1/2 pointer-events-none top-1/2">Escribe un comentario...</span>
      </div>

      <button type="button" @click="addComment" class="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        <IconSend />
      </button>
    </div>
  </form>
</template>

<script>
import IconSend from "vue-material-design-icons/Send.vue";
import postApi from "@/services/impl/PostService.js";

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
    commentsList: {
      type: Object,
      required: true
    },
    postId: {
      type: Number,
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
      this.newComment = "";
    },
    addComment() {
      if (this.newComment !== "") {
        const newComment = {
          user: {
            name: this.currentUser.name,
            avatar: this.currentUser.avatar
          },
          createdAt: new Date().toLocaleString(),
          content: this.newComment
        };

        this.createNewComment(this.postId, newComment);
        this.clearInput();
      }
    },
    async createNewComment(id, newComment) {
      await this.postService.createCommentByPostId(id, newComment).then((response) => {
        this.commentsList.unshift(newComment);
        this.clearInput();
      }).catch((error) => {
        console.log("error: ", error.data);
      });
    }
  },
  computed: {
    postService() {
      return new postApi();
    },
  }
};
</script>
