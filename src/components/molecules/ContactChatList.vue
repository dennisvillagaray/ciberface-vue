<template>
  <div class="fixed ml-16 overflow-hidden w-80">
    <h1>Contact List</h1>
    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre"
      class="block w-full h-10 px-3 py-3 my-4 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400" />
    <div class="chat-list">
      <ul class="w-full h-full pt-3 space-y-4 overflow-auto">
        <li v-for="contact in contacts" :key="contact.id">
          <div class="flex items-center h-12 px-4 cursor-pointer hover:bg-gray-100" @click="navigateToContact(contact.id)">
            <ImageRounded :image="contact.image" size="mini" />
            <span class="ml-4">{{ contact.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImageRounded from "@/components/atoms/ImageRounded.vue";
import BaseInput from "@/components/atoms/BaseInput.vue";
import { mapActions, mapGetters } from "vuex";
import userApi from "@/services/impl/UserService.js";

export default {
  name: "ContactChatList",
  components: { ImageRounded, BaseInput },
  props: {
    userId: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      searchQuery: "",
      contacts: [
        {
          id: "11111",
          name: "Contact 1",
          image: "https://i.pravatar.cc/100?img=1"
        },
        {
          id: "22222",
          name: "Contact 2",
          image: "https://i.pravatar.cc/100?img=2"
        },
      ]
    }
  },
  methods: {
    ...mapActions('chat', ['addChatIdToList']),
    ...mapGetters('user', { user: 'getUser' }),
    navigateToContact(id) {
      this.addChatIdToList(id)
    },
    async getContactsList() {
      await this.userService
        .getContactsByUserId(this.user.id)
        .then((response) => {
          console.log("response: ", response.data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  },
  computed: {
    userService() {
      return new userApi();
    }
  }
}
</script>
<style scoped>
.chat-list {
  height: calc(100vh - 200px);
}
</style>