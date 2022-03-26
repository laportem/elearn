<template>
  <button
    type="button"
    @click="$emit('click')"
    class="text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 -ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
    <span class="font-semibold uppercase">{{ label }}</span>
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

