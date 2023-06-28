<template>
  <div
    ref="modalChat"
    class="flex flex-col bg-white border shadow-md w-80 h-[450px] relative bottom-0 right-0 mr-4 justify-between"
    v-if="chatId"
  >
    <ChatModalHeader
      :avatar="avatarImage"
      @minimizeChat="minimizeChat"
      @closeChat="closeChat"
      :chat-id="chatId"
    />

    <div ref="bodyChat" class="grid h-full grid-flow-row p-4 overflow-y-auto">
      <ChatModalMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message.message"
        :time="message.time"
        :isMe="message.isMe"
        :avatar="avatarImage"
      />
    </div>

    <div ref="footerChat" class="flex items-center p-2 border-t">
      <div class="w-full mx-2">
        <DivInput
          @content-updated="handleContentUpdated"
          md-ref="inputChat"
          :is-clear-input="isClearInput"
        />
      </div>

      <div>
        <button
          class="inline-flex p-2 rounded-full hover:bg-indigo-50"
          type="button"
          @click="sendMessage"
        >
          <IconSend />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatModalHeader from "@/components/atoms/Chat/Modal/ChatModalHeader.vue";
import ChatModalMessage from "@/components/atoms/Chat/ChatModalMessage.vue";
import IconSend from "vue-material-design-icons/Send.vue";
import DivInput from "@/components/atoms/DivInput.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: 'ChatModal',
  components: { ChatModalHeader, ChatModalMessage, IconSend, DivInput },
  props: {
    chatId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      modelValue: "",
      avatarImage: "https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/09/28/14750947841563.png",
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    ...mapActions('chat', ['addMessage']),
    scrollToBottom() {
      if (this.chatId) {
        this.$refs.bodyChat.scrollTop = this.$refs.bodyChat.scrollHeight;
      }
    },
    minimizeChat() {
      const { modalChat, bodyChat, footerChat } = this.$refs

      modalChat.classList.toggle("h-[50px]");
      bodyChat.classList.toggle("hidden");
      footerChat.classList.toggle("hidden");

    },
    closeChat() {
      this.$refs.modalChat.remove();
      this.$emit("closeChat", this.chatId);
    },
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
      this.addMessage({chatId: this.chatId, message: newMessage})
      this.clearInput();
    },
    clearInput() {
      this.modelValue = "";
      this.isClearInput = true;
    }
  },
  computed: {
    ...mapState('chat', {
      messages: function (state) {
        return state.chats[this.chatId.toString()] || [];
      }
    })
  }
}
</script>