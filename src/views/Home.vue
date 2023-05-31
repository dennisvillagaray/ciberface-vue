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
      // posts: [
      //   {
      //     id: 1,
      //     author: {
      //       name: "Susana",
      //       avatar: "https://i.pravatar.cc/100?img=1"
      //     },
      //     timestamp: "May 20, 2023",
      //     content:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      //     image: "https://picsum.photos/600/400?img=1",
      //     name: "John Doe",

      //     comments: [
      //       {
      //         id: 1,
      //         user: {
      //           name: "Usuario 1",
      //           avatar: "https://i.pravatar.cc/100?img=3"
      //         },
      //         content:
      //           "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      //       },
      //       {
      //         id: 2,
      //         user: {
      //           name: "Usuario 2",
      //           avatar: "https://i.pravatar.cc/100?img=2"
      //         },
      //         content: "Comentario 2"
      //       }
      //     ],
      //     currentUser: {
      //       name: "Dennis",
      //       avatar: "https://i.pravatar.cc/100?img=4"
      //     },
      //     newComment: ""
      //   },
      //   {
      //     id: 2,
      //     author: {
      //       name: "Dennis",
      //       avatar: "https://i.pravatar.cc/100?img=4"
      //     },
      //     timestamp: "May 22, 2023",
      //     content: "Esta es una publicación de prueba....",
      //     image: null,
      //     name: "Dennis",

      //     comments: [
      //       {
      //         id: 2,
      //         user: {
      //           name: "Usuario 2",
      //           avatar: "https://i.pravatar.cc/100?img=4"
      //         },
      //         content: "Fabuloso!!!"
      //       },
      //       {
      //         id: 2,
      //         user: {
      //           name: "Usuario 1",
      //           avatar: "https://i.pravatar.cc/100?img=2"
      //         },
      //         content: "Increible!!!"
      //       }
      //     ],
      //     currentUser: {
      //       name: "Susana",
      //       avatar: "https://i.pravatar.cc/100?img=1"
      //     },
      //     newComment: ""
      //   },
      //   {
      //     id: 3,
      //     author: {
      //       name: "John Doe",
      //       avatar: "https://i.pravatar.cc/100?img=6"
      //     },
      //     timestamp: "May 17, 2023",
      //     content: null,
      //     image: "https://picsum.photos/600/400?img=3",
      //     name: "John ",

      //     comments: [],
      //     currentUser: {
      //       name: "Susana",
      //       avatar: "https://i.pravatar.cc/100?img=1"
      //     },
      //     newComment: ""
      //   }
      // ]
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
