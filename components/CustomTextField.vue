<template>
  <div>
    <div class="mlFrmLabel">
      <label :for="name">{{ label }}</label>
      <span v-if="required" class="pl-1 mlFrmFldRequired">*</span>
    </div>
    <div class="flex flex-col w-full">
      <div class="relative flex w-full flex-wrap items-center">
        <input
          :disabled="disabled"
          type="text"
          :name="name"
          :value="value"
          :maxlength="300"
          :placeholder="placeholder"
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
  name: 'CustomTextField',
  props: {
    name: { type: String, required: true, default: 'Default' },
    value: { type: String, required: false, default: '' },
    label: { type: String, required: true, default: 'Field Name' },
    placeholder: { type: String, required: false, default: 'Enter a value' },
    required: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false, default: false },
    errors: { type: Array, required: false, default: () => [] },
  },

  computed: {
    getIcon() {
      // return () => import(`~/components/svgs/${this.iconname}`);
    },
  },
};
</script>
