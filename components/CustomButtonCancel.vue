<template>
  <button type="button" style="transition: all 0.15s ease" @click="$emit('click')">
    <span class="uppercase text-base font-medium tracking-wide">{{ label }}</span>
  </button>
</template>
<script>
export default {
  name: 'CustomButtonCancel',
  props: {
    label: { type: String, required: true, default: 'Click Me' },
  },
};
</script>
<style scoped>
.mlCustomCancelBtnNoBorder {
  @apply bg-transparent;
  @apply rounded-md;
  @apply outline-none;
  @apply text-gray-600;
}

.mlCustomCancelBtnNoBorder:hover {
  @apply text-gray-400;
  @apply outline-none;
}

.mlCustomCancelBtnNoBorder:focus {
  @apply outline-none;
}
</style>
