<template>
  <div class="container relative flex flex-col min-h-screen mx-auto">
    <header
      class="fixed top-0 left-0 z-50 items-center justify-center w-full h-16 p-4 bg-gray-800"
    >
      <nav class="container flex items-center justify-between mx-auto">
        <a href="#" @click="goInitial" class="text-xl font-bold text-white"
          >fakerface</a
        >
        <div>
          <a href="#" class="text-white">link a una página</a>
          <a
            href="#"
            class="px-4 py-2 ml-4 font-bold text-gray-800 bg-white rounded"
            >link a otra página</a
          >
        </div>
      </nav>
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
      <!-- <template v-if="showChatModal"> -->
      <ChatModal
        v-for="id in idList"
        :key="id"
        :chat-id="id"
        @closeChat="closeChat"
      />
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { mapState, mapActions } from "vuex";

import Login from "@/views/auth/Login.vue";
import ChatModal from "@/components/molecules/ChatModal.vue";

export default {
  name: "Layout",
  components: {
    Login,
    ChatModal,
  },
  data(){
    return {
    showChatModal: false,
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
    }
  },
  computed: {
    ...mapState('chat', {
      idList: function (state) {
        return state.chatIdList;
      }
    }),
  }
};
</script>
