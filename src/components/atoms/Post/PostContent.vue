<template>
  <div v-if="existText" class="mb-4">
    <p>{{ text }}</p>
  </div>
  <div v-if="existImage" class="mb-4">
    <img :src="image" alt="Post Image" class="w-full rounded" />
  </div>
</template>

<script>
export default {
  name: "PostContent",
  props: {
    mdImage: {
      type: String,
      required: false
    },
    mdText: {
      type: String,
      required: false
    }
  },
  computed: {
    existImage() {
      return this.mdImage !== null;
    },
    existText() {
      return this.mdText !== null;
    },
    image() {
      return this.mdImage || "";
    },
    text() {
      return this.mdText || "";
    }
  }
};
</script>
