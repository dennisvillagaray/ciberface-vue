<template>
  <div>
    <div v-for="row in data" :key="row.id">
      <div class="grid grid-cols-2 mb-3">
        <div class="font-semibold">{{ row.label }}</div>
        <div class="">{{ row.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComp",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
