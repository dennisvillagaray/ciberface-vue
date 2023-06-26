<template>
  <div class="relative w-full p-2 mb-4 border border-gray-300 rounded">
    <div
      class="w-full text-base outline-none"
      contenteditable="true"
      :ref="mdRef"
      @input="onPostInput"
      @keydown.enter="handleEnterKey"
    ></div>
    <span
      v-if="showPlaceholder"
      class="absolute text-base text-gray-700 -translate-y-1/2 pointer-events-none top-1/2"
      >{{ placeHolder }}</span
    >
  </div>
</template>
<script>
export default {
  name: "DivInput",
  props: {
    mdRef: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: false,
      default: "Aa"
    },
    isClearInput: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      newContent: "",
      showPlaceholder: true
    };
  },
  watch: {
    isClearInput: function (val) {
      if (val) {
        this.$refs[this.mdRef].innerText = "";
        this.showPlaceholder = true;
      }
    }
  },
  methods: {
    onPostInput() {
      const ref = this.mdRef
      this.newContent = this.$refs[ref].innerText;
      this.showPlaceholder = this.newContent === "";
      this.$emit("content-updated", this.newContent);
    },
  }
}
</script>