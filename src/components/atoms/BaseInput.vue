<template>
  <div class="relative float-label-input">
    <input
      :id="id"
      :type="type"
      placeholder=" "
      class="block w-full h-10 px-3 py-3 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="focus"
      @blur="blur"
    />
    <label
      v-if="label"
      :for="id"
      class="absolute left-0 px-2 text-gray-400 transition duration-200 pointer-events-none top-1.5 ease-in-outbg-white text-grey-darker"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$emit("focus");
    },
    blur() {
      this.$emit("blur");
    }
  }
};
</script>

<style scoped>
.float-label-input {
  margin-bottom: 1.5rem;
}

.float-label-input:focus-within label,
.float-label-input input:not(:placeholder-shown) + label {
  transform: translateY(-1.5rem) scale(0.75);
  background-color: white;
}
</style>
