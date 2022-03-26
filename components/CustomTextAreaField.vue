<template>
  <div>
    <div class="mlFrmLabel">
      <label :for="name">{{ label }}</label>
      <span v-if="required" class="pl-1 mlFrmFldRequired">*</span>
    </div>
    <div class="flex flex-col w-full">
      <div class="relative flex w-full flex-wrap items-center">
        <textarea
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :rows="rows"
          :maxlength="maxlength"
          class="w-full mlFrmValue bg-white"
          @input="$emit('input', $event.target.value)"
        />
      </div>
      <span class="mlFrmErrorMsg">{{ errors[0] }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomTextAreaField',
  props: {
    name: { type: String, required: true, default: 'Default' },
    value: { type: String, required: false, default: '' },
    label: { type: String, required: true, default: 'Field Name' },
    rows: { type: Number, required: false, default: 4 },
    maxlength: { type: Number, required: false, default: 2000 },
    placeholder: { type: String, required: false, default: 'Enter a value' },
    required: { type: Boolean, required: false, default: false },
    errors: { type: Array, required: false, default: () => [] },
  },
};
</script>
