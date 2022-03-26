<template>
  <div class="h-full w-full mx-auto flex flex-col">
    <main class="flex flex-col">
      <div class="text-2xl text-gray-600">Submit Form</div>
      <div class="text-gray-700 text-lg text-opacity-70 pt-1">Please accept the T&C and submit your form.</div>
      <div class="py-6"></div>
      <div class="text-lg font-medium text-center px-20">{{ message }}</div>
    </main>
    <footer class="flex flex-row items-center justify-between pt-10">
      <CustomButtonCancel :label="'CANCEL'" @click="goCancel"></CustomButtonCancel>
      <div class="flex items-center gap-10">
        <CustomButtonBack class="px-5 py-3" :label="'BACK'" @click="goBack"></CustomButtonBack>
        <CustomButtonPrimary :buttonStyle="'px-10 py-6'" :label="'SUBMIT'" @click="goNext"></CustomButtonPrimary>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'StudentForm',
  components: {
    CustomButtonCancel: () => import('~/components/CustomButtonCancel'),
    CustomButtonBack: () => import('~/components/CustomButtonBack'),
    CustomButtonPrimary: () => import('~/components/CustomButtonPrimary'),
  },

  data() {
    return {
      message:
        'By clicking "Submit", you agree to receive emails, promotions, and general messages from T-Learning. In addition, you also agree to the T-Learning’s Public Policy and Terms & Conditions.',
      accept: false,
    };
  },

  mounted() {
    this.$store.commit('SET_IS_STUDENT_FORM', false);
  },

  methods: {
    goCancel() {
      this.$emit('cancel');
    },

    goBack() {
      this.goApply('back');
    },

    goNext() {
      this.goApply('next');
    },

    goApply(step) {
      const _payload = { form: 'submit', data: null };
      this.$emit(step, _payload);
    },
  },
};
</script>