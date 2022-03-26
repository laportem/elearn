<template>
  <button class="mlBtn" :class="buttonStyle" type="button" style="transition: all 0.15s ease" @click="$emit('click')">
    <span class="text-white">{{ label }}</span>
  </button>
</template>
<script>
export default {
  name: 'PrimaryButton',
  props: {
    label: { type: String, required: true, default: 'Click Me' },
    buttonStyle: { type: String, required: false, default: 'px-3 py-3' },
  },
};
</script>

<style scoped>
.mlBtn {
  @apply bg-blue-600;
  @apply text-white font-medium;
  @apply rounded-lg;
  @apply text-center;
}

.mlBtn:hover {
  @apply bg-blue-700;
}

.mlBtn:focus {
  @apply: ring-4 ring-blue-300;
}
</style>
