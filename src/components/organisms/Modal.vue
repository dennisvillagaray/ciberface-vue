<template>
  <div>
    <!-- Modal -->
    <div
      v-if="isModalProfileOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div class="z-10 p-6 bg-white rounded-lg w-[600px]">
        <h2 class="mb-4 text-lg font-bold text-center">Editar Perfil</h2>

        <form @submit.prevent="saveChanges">
          <div class="mb-4">
            <BaseInput id="name" label="Nombre" v-model="editedData.name" />
          </div>
          <div class="mb-4">
            <BaseInput
              id="surName"
              label="Apellidos"
              v-model="editedData.surname"
            />
          </div>
          <div class="mb-4">
            <BaseInput
              id="birthDate"
              label="Fecha de Nacimiento"
              type="date"
              v-model="editedData.birthDate"
            />
          </div>
          <div class="mb-4">
            <BaseInput id="gender" label="Género" v-model="editedData.gender" />
          </div>
          <div class="mb-4">
            <BaseInput id="phone" label="Teléfono" v-model="editedData.phone" />
          </div>
          <div class="mb-4">
            <BaseInput
              id="email"
              label="Correo Electrónico"
              type="email"
              v-model="editedData.email"
            />
          </div>
          <div class="mb-4">
            <BaseTextArea
              id="email"
              label="Biografia"
              v-model="editedData.about"
            />
          </div>

          <div class="text-right">
            <button
              type="submit"
              class="px-4 py-2 text-white bg-blue-500 rounded"
            >
              Guardar Cambios
            </button>
            <button
              @click="closeModal"
              class="px-4 py-2 ml-2 text-gray-700 bg-gray-300 rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DivInput from "@/components/atoms/DivInput.vue";
import BaseInput from "@/components/atoms/BaseInput.vue";
import BaseTextArea from "@/components/atoms/BaseTextArea.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  components: {
    DivInput,
    BaseInput,
    BaseTextArea
  },
  data() {
    return {
      modelValue: "asd",
      editedData: {
        name: "",
        surname: "",
        email: "",
        birthDate: "",
        phone: "",
        gender:"",
        about:"",
      },
    };
  },
  methods: {
    ...mapActions({
      setModalProfile: "user/setModalProfile",
      modifyUserCurrent: "user/modifyUserCurrent",
    }),
    closeModal() {
      this.setModalProfile(false);
      this.setData()
    },
    saveChanges() {
      this.modifyUserCurrent(this.editedData);
      this.setModalProfile(false);
      this.setData()
    },
    setData() {
      this.editedData = { ...this.user };
    },
    handleContentUpdated(value) {
      this.modelValue = value;
    },
  },
  computed: {
    ...mapState({
      isModalProfileOpen: state => state.user.modalProfile,
      user: state => state.user.userCurrent,
    }),
  },
  created() {
    this.setData()
  }
};
</script>
