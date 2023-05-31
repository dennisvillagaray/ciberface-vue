<template>
  <div class="w-full max-w-2xl p-4 mb-4 bg-white rounded-lg shadow-md">
    <div class="flex items-center mb-2">
      <img class="w-10 h-10 mr-2 rounded-full" :src="author.avatar" :alt="author.name" />
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ author.name }}</h3>
        <p class="text-sm text-gray-500">{{ post.timestamp }}</p>
      </div>
    </div>
    <PostContent :md-image="post.image" :md-text="post.content" />
    <div class="flex justify-between">
      <button class="flex items-center text-blue-500 hover:text-blue-700">
        <IconLike class="mr-1" />
        Like
      </button>
      <button class="flex items-center text-gray-500 hover:text-gray-700" @click="_handleShowComments">
        <IconComment class="mr-1" />
        {{ showComments ? "Ocultar Comentarios" : "Comentar" }}
      </button>
      <button class="flex items-center text-gray-500 hover:text-gray-700">
        <IconShare class="mr-1" />
        Compartir
      </button>
    </div>
    <PostFormComment v-if="showComments" :currentUser="post.currentUser" :post-id="post.id" :commentsList="commentsList" />
    <PostListComment v-if="showComments" :comments="commentsList" />
  </div>
</template>

<script>
import PostContent from "@/components/atoms/PostContent.vue";
import PostListComment from "@/components/atoms/PostListComment.vue";
import PostFormComment from "@/components/atoms/PostFormComment.vue";

import IconLike from "vue-material-design-icons/ThumbUp.vue";
import IconComment from "vue-material-design-icons/Comment.vue";
import IconShare from "vue-material-design-icons/Share.vue";
import postApi from "@/services/impl/PostService.js";

export default {
  name: "Post",
  components: {
    PostContent,
    PostListComment,
    PostFormComment,
    IconLike,
    IconComment,
    IconShare
  },
  props: {
    author: {
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
      showComments: false,
      commentsList: []
    };
  },
  watch: {
    showComments: {
      handler: function (val) {
        if (val) {
          this.getCommentList();
        }
      },
      deep: true
    }
  },
  computed: {},
  methods: {
    _handleShowComments() {
      this.showComments = !this.showComments;
    },
    async getCommentList() {
      await this.postService
        .getCommentListByPostId(this.post.id)
        .then((response) => {
          this.commentsList = response.data.reverse();
        }).catch((error) => {
          console.log("ERROR - getCommentList: ", error);
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
