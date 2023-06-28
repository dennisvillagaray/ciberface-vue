<template>
  <nav class="container flex items-center justify-between mx-auto">
    <div>
      <a href="/" class="text-xl font-bold text-white">fakerface</a>
    </div>

    <!-- Dropdown de usuario -->
    <div class="relative" @click="toggleDropdown" v-if="isLogged">
      <button class="flex items-center text-white">
        <img class="w-8 h-8 mr-2 rounded-full" :src="user.avatar" :alt="user.name" />
        <span>{{ formatName }}</span>
        <svg class="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z" clip-rule="evenodd" />
        </svg>
      </button>

      <!-- Dropdown del usuario -->
      <div v-if="showDropdown" class="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg">
        <a :href="`/profile/${user.username}`" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Configuración</a>
        <hr />
        <button @click="logoutButton" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cerrar sesión</button>
      </div>
    </div>
  </nav>
</template>

<script>
import ImageRounded from "@/components/atoms/ImageRounded.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "UserNavbar",
  components: {
    ImageRounded
  },
  data() {
    return {
      showDropdown: false
    };
  },
  mounted() {
  },
  methods: {
    ...mapActions(['modifyLogged']),
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logoutButton() {
      // this.$store.dispatch("user/logout");
      this.modifyLogged(false)
      this.$router.push({ name: "Login", path: "/login" });
    },
  },
  computed: {
    ...mapState({
      isLogged: state => state.isLogged,
      user: state => state.user.userCurrent
    }),
    formatName() {
      const surname = this.user.surname.split(' ')[0]
      return `${this.user.name} ${surname}`
    }
  }
};
</script>

<style>
/* Agrega estilos adicionales según sea necesario */
</style>
