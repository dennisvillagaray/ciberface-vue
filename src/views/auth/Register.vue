<template>
  <section class="flex w-full place-content-center">
    <div class="flex flex-col items-center justify-center text-center mr-28">
      <Logo width="129" height="129" />
      <h3 class="font-sans text-5xl font-bold">CIBERFACE</h3>
      <span class="mt-4 font-sans text-xs"
        >Somos la red social oficial de Chistotec 😎</span
      >
    </div>
    <div
      class="flex flex-col items-center justify-center max-w-2xl border-2 border-black rounded-3xl"
    >
      <div class="w-full max-w-md px-5 py-9">
        <form class="space-y-6" @submit.prevent="register">
          <BaseInput
            id="user"
            label="Usuario"
            type="text"
            v-model="newUser.user"
            @blur="validateBlur('user')"
          />
          <BaseInput
            id="name"
            label="Nombres"
            type="text"
            v-model="newUser.name"
            @blur="validateBlur('name')"
          />
          <BaseInput
            id="surname"
            label="Apellidos"
            type="text"
            v-model="newUser.surname"
            @blur="validateBlur('surname')"
          />
          <BaseInput
            id="email"
            label="Correo electrónico"
            type="email"
            v-model="newUser.email"
            @blur="validateBlur('email')"
          />
          <BaseInput
            id="password"
            label="Contraseña"
            type="password"
            v-model="newUser.password"
            @blur="validateBlur('password')"
          />
          <BaseInput
            id="tryPassword"
            label="Contraseña"
            type="password"
            v-model="newUser.tryPassword"
            @blur="validateBlur('tryPassword')"
          />
          <Button text="REGISTRARME" />
        </form>
        <hr class="h-px my-8 bg-black border-0" />
        <div class="flex justify-center w-full">
          <Button
            :large="false"
            md-color-background="bg-red-600"
            @click="redirect('/login')"
            text="YA TENGO UNA CUENTA"
          />
        </div>
      </div>
      <!-- <div v-if="v$.newUser.email.$error">Name field has an error.</div> -->
    </div>
  </section>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
// TODO: Terminar las validaciones, agregar consumir endpoint de registro
import BaseInput from "@/components/atoms/BaseInput.vue";
import Button from "@/components/atoms/Button.vue";
import Logo from "@/components/atoms/Logo.vue";


export default {
  name: "Register",
  components: {
    BaseInput,
    Button,
    Logo
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => {
    return {
      newUser: {
        user: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        tryPassword: ""
      }
    };
  },
  validations: () => {
    return {
      newUser: {
        user: { required: helpers.regex(/^[a-zA-Z0-9]+$/g) },
        name: { required: helpers.regex(/^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ]+$/) },
        surname: { required: helpers.regex(/^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ]+$/) },
        email: { required, email },
        password: { required },
        tryPassword: { required }
      }
    };
  },
  methods: {
    async validateBlur(data) {
      await this.v$.newUser[data].$touch;
      const blur = this.v$.newUser[data].$error;
      console.log(`data - ${data}: `, blur);
    },
    redirect(path) {
      this.$router.push(path);
    },
    async register() {
      const result = await this.v$.$invalid;
      if (result) {
        console.log(
          "Por favor corrija los errores antes de enviar el formulario"
        );
        return;
      }
    }
  }
};
</script>
