<template>
  <div class="container relative flex flex-col min-h-screen mx-auto">
    <header class="fixed top-0 left-0 z-50 items-center justify-center w-full h-16 p-4 bg-gray-800">
      <user-navbar />
    </header>
    <main class="relative flex items-start justify-center flex-1 py-4 mt-16">
      <router-view></router-view>
    </main>
    <footer class="flex items-center justify-center h-16 bg-gray-800">
      <div class="container mx-auto text-center text-white">
        © 2023 fakerface
      </div>
    </footer>
    <div class="fixed bottom-0 right-0 z-50 flex items-end">
      <ChatModal v-for="id in idList" :key="id" :chat-id="id" @closeChat="closeChat" />
    </div>
    <ModalProfile @closeModal="closeModal" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { mapState, mapActions } from "vuex";
import ModalProfile from "@/components/organisms/Modal.vue";
import UserNavbar from "@/components/NavBarComp.vue";

import Login from "@/views/auth/Login.vue";
import ChatModal from "@/components/molecules/ChatModal.vue";

export default {
  name: "Layout",
  components: {
    Login,
    ChatModal,
    ModalProfile,
    UserNavbar
  },
  data() {
    return {
      showChatModal: false,
      // shoWModalProfile: false
    }
  },
  setup() {
    return { router: useRouter() }
  },
  mounted() {
    this.getRouterName();
  },
  updated() {
    this.getRouterName();
  },
  // watch: {
  //   isModalProfileOpen(val) {
  //     this.shoWModalProfile = val;
  //   }
  // },
  methods: {
    ...mapActions('chat', ['removeChatIdFromList']),
    goInitial() {
      this.$router.push({ name: "Home" });
    },
    getRouterName() {
      if (this.$route.meta?.hiddenChatModal) {
        this.showChatModal = false;
      } else {
        this.showChatModal = true;
      }
    },
    closeChat(id) {
      this.removeChatIdFromList(id);
    },
    openModal() {
      this.isModalProfileOpen = true;
    },
    closeModal() {
      this.isModalProfileOpen = false;
    }
  },
  computed: {
    ...mapState({
      idList: state => state.chat.chatIdList,
      isModalProfileOpen: state => state.user.modalProfile
    })
  }
};
</script>
