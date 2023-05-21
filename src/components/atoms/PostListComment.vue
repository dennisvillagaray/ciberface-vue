<template>
  <ul class="w-full">
    <li v-for="comment in comments" :key="comment.id" class="mt-4 mb-2">
      <div class="flex items-start">
        <img
          class="w-6 h-6 rounded-full"
          :src="comment.user.avatar"
          alt="Avatar"
        />

        <div class="ml-2">
          <p class="font-bold">{{ comment.user.name }}</p>

          <p class="text-sm whitespace-pre-wrap">{{ comment.content }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PostListComment",
  props: {
    comments: {
      type: Object,
      required: true
    }
  },
  computed: {
    existComments() {
      return this.comments.length > 0 ? true : false;
    }
  }
};
</script>
