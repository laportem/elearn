<template>
  <div>
    <label class="mlFrmLabel">{{ label }}</label>
    <span v-if="required" class="pl-1 mlFrmFldRequired">*</span>
    <multiselect
      v-model="selected"
      :disabled="disabled"
      :options="items"
      track-by="code"
      label="label"
      placeholder="Select..."
      class="w-full bg-white mlSelect"
      :allow-empty="true"
      openDirection="below"
      @input="$emit('input', $event)"
    >
    </multiselect>
    <span class="mlFrmErrorMsg pt-1">{{ errors[0] }}</span>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
export default {
  name: 'CustomSelectField',
  components: {
    Multiselect,
  },
  props: {
    item: { type: Object, required: false, default: () => null },
    items: { type: Array, required: true, default: () => [] },
    label: { type: String, required: true, default: 'Field Name' },
    required: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false, default: false },
    errors: { type: Array, required: true, default: () => [] },
  },
  data() {
    return {
      selected: this.item,
    };
  },

  watch: {
    item() {
      this.selected = this.item;
    },
  },
};
</script>

<style scoped>
.mlSelect >>> .multiselect__tags {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  @apply border border-blue-300;
  @apply rounded-lg;
  @apply outline-none;
  @apply text-base;
}

.mlSelect >>> .multiselect__placeholder {
  display: inline-block !important;
  margin-top: 0px !important;
  padding-bottom: 8px !important;
  margin-bottom: 0px !important;
  @apply text-base;
  @apply text-gray-300;
}

.mlSelect >>> .multiselect__single {
  padding-top: 3px !important;
}

.mlSelect >>> .multiselect__content-wrapper {
  @apply shadow-md;
  @apply rounded-b-lg;
  @apply border border-blue-300;
}

.mlSelect >>> .multiselect__option--selected {
  background: transparent !important;
  padding-bottom: 1px !important;
  color: black !important;
  font-weight: bold;
}

.mlSelect >>> .multiselect__option--highlight {
  background: #e5e7eb !important;
  color: black !important;
}

.mlSelect >>> .multiselect__select {
  top: 6px;
}
</style>