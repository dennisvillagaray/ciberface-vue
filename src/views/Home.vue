<template>
  <template v-if="isLoading">
    <div class="w-full max-w-xl mb-3">
      <Skeleton v-for="sk in [1, 2, 3]" :key="sk" />
    </div>
  </template>
  <template v-else>
    <div class="mr-16"></div>
    <div>
      <PostNewPost @new-post="addNewPost" :current-user="currentUser" />
      <Post v-for="(post, index) in posts" :key="index" :author="post.author" :post="post" />
    </div>
    <div class="mr-16"></div>
  </template>
</template>

<script>
import Post from "@/components/molecules/Post.vue";
import PostNewPost from "@/components/atoms/PostNewPost.vue";
import Skeleton from "@/components/atoms/Skeleton.vue";
import postApi from "@/services/impl/PostService.js";
import userApi from "@/services/impl/UserService.js";

export default {
  name: "Home",
  components: { Post, PostNewPost, Skeleton },
  data() {
    return {
      posts: [],
      currentUser: {},
      isLoading: true
    };
  },
  mounted() {
    this.getListPost();
    this.getCurrentUser();
  },
  methods: {
    async getListPost() {
      await this.postService
        .getPosts()
        .then((response) => {
          this.posts = response.data.reverse();
        })
        .catch((error) => {
          console.log("error: ", error);
          console.log(error);
        });
    },
    async addNewPost(newPost) {
      await this.postService
        .createPost(newPost)
        .then(() => {
          this.posts.unshift(newPost);
          setTimeout(() => {
            this.isLoading = false;
          }, 1000)
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },
    async getCurrentUser() {
      await this.userService
        .findOneUser(114)
        .then((response) => {
          this.currentUser = response.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 1000)
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  },
  computed: {
    postService() {
      return new postApi();
    },
    userService() {
      return new userApi();
    }
  }
};
</script>
