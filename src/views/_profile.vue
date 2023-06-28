<template>
  <div class="container relative flex-grow h-full mx-auto -translate-y-4 rounded-lg">
    <ProfileHeader />
    <div class="flex items-center justify-end w-full mt-5">
      <Button v-if="isCurrentUser" :large="false" text="Editar perfil" @click="openModal" />
      <Button v-else :large="false" text="Agregar" @click="addFriend" />
    </div>
    <section class="grid gap-2 mt-10 column-grid">
      <div class="flex-col items-center justify-center w-full h-full">
        <ProfileInformation />
      </div>
      <div class="flex flex-col justify-center h-full place-self-center">
        <div class="w-auto ">
          <Post v-for="(post, index) in posts" :key="index" :author="post.author" :post="post" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProfileHeader from "@/components/atoms/profile/ProfileHeader.vue";
import ProfileInformation from "@/components/atoms/profile/ProfileInformation.vue";
import Post from "@/components/molecules/Post.vue";

import ChatModalMessage from "@/components/atoms/Chat/ChatModalMessage.vue";
import ProfileUser from "@/components/atoms/Chat/Page/ProfileUser.vue";
import UserChat from "@/components/atoms/Chat/Page/UserChat.vue";
import DivInput from "@/components/atoms/DivInput.vue";
import Button from '@/components/atoms/Button.vue';
import { mapState, mapActions } from "vuex";

import postApi from "@/services/impl/PostService.js";

export default {
  name: "Profile",
  components: {
    ProfileHeader,
    ProfileInformation,
    Post,

    ChatModalMessage,
    ProfileUser,
    UserChat,
    DivInput,
    Button
  },
  data() {
    return {
      isModalOpen: false,
      posts: [],
      demo: [
        {
          avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/233.jpg",
          id: "111",
          name: 'John',
          surname: 'Doe Dam',
          username: 'john-doe',
          email: 'demo@demo.com',
          birthDate: '1995-05-11',
          phone: '123456789',
          gender: 'Masculino',
          about: 'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet'
        },
        {
          avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/456.jpg",
          id: "222",
          name: 'Jane',
          surname: 'Smith',
          username: 'jane-smith',
          email: 'jane@example.com',
          birthDate: '1990-12-01',
          phone: '987654321',
          gender: 'Femenino',
          about: 'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet'
        },
        {
          avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg",
          id: "333",
          name: 'Michael',
          surname: 'Johnson',
          username: 'michael-johnson',
          email: 'michael@example.com',
          birthDate: '1988-07-15',
          phone: '456123789',
          gender: 'Masculino',
          about: 'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet'
        }
      ]
    }
  },
  beforeMount() {
    this.getUser();
    this.getListPost();

  },
  methods: {
    ...mapActions({
      setModalProfile: "user/setModalProfile",
      setUserCurrent: "user/setUserCurrent",
    }),
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
    openModal() {
      this.setModalProfile(true);
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addFriend() {
      console.log('add friend');
    },
    async getUser() {
      const username = this.$route.params.username;
      const newUser = this.demo.find((user) => user.username === username);
      if (!newUser) {
        this.$router.push({ name: "Home" });
        return;
      }
      this.setUserCurrent(newUser)
    },
  },
  computed: {
    ...mapState({
      messages: state => state.chat.chats[this.currentChat.toString()] || [],
      user: state => state.user.userCurrent,
      isLogged: state => state.isLogged,
    }),
    isCurrentUser() {
      return this.user.username === this.$route.params.username;
    },
    currentChat() {
      return this.$route.params.slug;
    },
    postService() {
      return new postApi();
    },
  },
};
</script>

<style scoped>
.column-grid {
  grid-template-columns: 0.5fr 1.5fr;
}
</style>