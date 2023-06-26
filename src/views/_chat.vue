<template>
  <div class="container relative flex-grow h-full mx-auto rounded-lg shadow-lg">
    <div
      class="flex flex-row justify-between bg-white border-t-2 chat-container"
    >
      <div class="flex flex-col w-2/5 overflow-y-auto border-r-2">
        <div class="px-2 py-4 border-b-2">
          <input
            type="text"
            placeholder="search chatting"
            class="w-full px-2 py-2 border-2 border-gray-200 rounded-2xl"
          />
        </div>

        <UserChat
          v-for="(user, index) in userList"
          :key="index"
          :name="user.name"
          :avatar="user.avatar"
          :date="user.date"
          :message="user.message"
          :id="user.id"
          :is-select="currentChat === user.id.toString()"
        />
      </div>

      <div
        class="relative flex flex-col justify-between w-full h-full px-5 overflow-hidden"
      >
        <div
          ref="messageContainer"
          id="messageContainer"
          class="relative flex flex-col h-full pr-4 mt-5 overflow-x-hidden overflow-y-auto"
        >
          <ChatModalMessage
            v-for="(message, index) in messages"
            :key="index"
            :message="message.message"
            :time="message.time"
            :isMe="message.isMe"
            :avatar="avatarImage"
          />
        </div>
        <div class="flex py-5">
          <DivInput
            @content-updated="handleContentUpdated"
            md-ref="inputChat"
            :is-clear-input="isClearInput"
          />
          <div class="w-24 ml-3">
            <Button @click="sendMessage" text="enviar" />
          </div>
        </div>
      </div>
      <ProfileUser />
    </div>
  </div>
</template>

<script>
import ChatModalMessage from "@/components/atoms/Chat/ChatModalMessage.vue";
import ProfileUser from "@/components/atoms/Chat/Page/ProfileUser.vue";
import UserChat from "@/components/atoms/Chat/Page/UserChat.vue";
import DivInput from "@/components/atoms/DivInput.vue";
import Button from '@/components/atoms/Button.vue';
import { mapState } from "vuex";

export default {
  name: "Chat",
  components: {
    ChatModalMessage,
    ProfileUser,
    UserChat,
    DivInput,
    Button
  },
  data() {
    return {
      avatarImage: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
      modelValue: "",
      isClearInput: false,
      userList: [
        {
          id: 11111,
          avatar: "https://source.unsplash.com/otT2199XwI8/600x600",
          name: "Everest Trip 2021",
          message: "Hi Sam, Welcome",
          date: "12:00",
        },
        {
          id: 22222,
          avatar: "https://source.unsplash.com/L2cxSuKWbpo/600x600",
          name: "MERN Stack",
          message: "Lusi : Thanks Everyone",
          date: "12:00",
        },
        {
          id: 33333,
          avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
          name: "Javascript Indonesia",
          message: "Evan : some one can fix this",
          date: "12:00",
        },
      ]
    };
  },
  mounted() {
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    handleContentUpdated(value) {
      this.modelValue = value;
    },
    sendMessage: async function() {
      if (this.modelValue === "") {
        return
      }
      const newMessage = {
        message: this.modelValue,
        time: "12:00",
        isMe: true,
      }
      this.messages.push(newMessage);
      this.clearInput();
    },
    clearInput() {
      this.isClearInput = true;
      this.modelValue = "";
      setTimeout(() => {
        this.isClearInput = false;
      }, 100);
    },
    scrollToBottom() {
      this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
    },
  },
  computed: {
    ...mapState('chat', {
      messages: function (state) {
        return state.chats[this.currentChat.toString()] || [];
      }
    }),
    currentChat() {
      return this.$route.params.slug;
    },

  },
};
</script>

<style scoped>
.chat-container {
  height: calc(100vh - 160px);
}
</style>