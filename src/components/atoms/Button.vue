<template>
  <button
    class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    :class="[{ 'w-full': large }, mdColorBackground, mdColorText]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      default: true
    },
    mdColorBackground: {
      type: String,
      default: "bg-blue-600"
    },
    mdColorText: {
      type: String,
      default: "text-white"
    }
  }
};
</script>
