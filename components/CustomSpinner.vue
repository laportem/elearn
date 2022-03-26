<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div style="border-top-color: transparent" class="w-20 h-20 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
    <div class="text-xl font-medium">{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: 'CustomSpinner',
  props: {
    message: { type: String, required: true, default: 'Submitting your appliction...' },
  },
};
</script>