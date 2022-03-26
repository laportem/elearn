<template>
  <button
    type="button"
    @click="$emit('click')"
    class="text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-lg px-5 py-3 text-center inline-flex items-center"
  >
    <span class="font-semibold uppercase">{{ label }}</span>

    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'CustomButtonNext',
  props: {
    label: { type: String, required: true, default: 'Click Me' },
  },
};
</script>

<style scoped>
.mlBtn {
  @apply bg-green-600;
  @apply text-white;
  @apply border;
  @apply border-solid;
  @apply border-green-600;
  @apply font-semibold;
  @apply tracking-wide;
  @apply outline-none;
  @apply py-2 rounded-md;
}

.mlBtn:hover {
  @apply shadow-lg;
  @apply bg-green-800;
  @apply outline-none;
}

.mlBtn:focus {
  @apply outline-none;
}
</style>
