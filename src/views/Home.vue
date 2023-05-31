<template>
  <div class="mr-16"></div>
  <div>
    <PostNewPost @new-post="addNewPost" :current-user="currentUser" />
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :author="post.author"
      :post="post"
    />
  </div>
  <div class="mr-16"></div>
</template>

<script>
import Post from "@/components/molecules/Post.vue";
import PostNewPost from "@/components/atoms/PostNewPost.vue";
import postApi from "@/services/impl/PostService.js";
import userApi from "@/services/impl/UserService.js";

export default {
  name: "Home",
  components: { Post, PostNewPost },
  data() {
    return {
      posts: [],
      currentUser: {}
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
