<template>
  <section class="w-full mb-4 break-words bg-slate-100">
    <h3 class="w-full px-4 py-2 font-semibold border rounded-lg shadow-lg text-start">
      {{ title  }}
    </h3>
    <div
      class="px-4 py-2 mt-3 border-b border-l border-r rounded-b-lg text-start"
    >
      <slot />
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProfileInfoItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    }
  }
}
</script>