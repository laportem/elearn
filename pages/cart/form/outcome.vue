<template>
  <div class="h-full w-full mx-auto flex flex-col">
    <main class="flex flex-col items-center">
      <CustomSuccess v-if="status"></CustomSuccess>
      <CustomFailed v-else></CustomFailed>
      <div class="py-2"></div>
      <div v-if="status" class="text-green-600 pt-1 text-center flex flex-col gap-3 font-semibold">
        <div class="text-xl">We have successfully received your application</div>
        <div>Check your inbox for links to start your course</div>
      </div>
      <div v-else class="text-red-600 text-lg pt-1 text-center flex flex-col gap-3 font-semibold">
        <div class="text-xl">Your application failed</div>
      </div>
      <div class="py-4"></div>
      <nuxt-link :to="`/`">
        <button
          type="button"
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-10 py-4 text-center uppercase"
        >
          Continue...
        </button>
      </nuxt-link>
      <div class="py-2"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'OutcomeComponent',
  props: {
    status: { type: Boolean, required: false, default: false },
  },

  components: {
    CustomSuccess: () => import('~/components/success'),
    CustomFailed: () => import('~/components/failed'),
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