<template>
  <img
    :src="image"
    class="object-cover rounded-full"
    :class="sizeClass"
    alt=""
  />
</template>

<script>
export default {
  name: 'ImageRounded',
  props: {
    image: {
      type: String,
      default: 'https://source.unsplash.com/L2cxSuKWbpo/600x600'

    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  },
  computed: {
    sizeClass() {
      return this.size === 'mini' ? 'w-8 h-8' : this.size === 'small' ? 'w-12 h-12' : this.size === 'medium' ? 'w-24 h-24' : 'w-32 h-32'
    }
  }
}
</script>