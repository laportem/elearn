<template>
  <div class="flex items-center">
    <div class="flex items-center relative">
      <div
        class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center"
        :class="status.student ? 'border-green-600 bg-green-600  text-white' : 'border-gray-200 bg-gray-50  text-gray-50'"
      >
        <CheckIcon width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase text-gray-600">About You</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.student ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div
        class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center"
        :class="status.address ? 'border-green-600 bg-green-600  text-white' : 'border-gray-200 bg-gray-50  text-gray-50'"
      >
        <CheckIcon width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase text-gray-600">Contacts</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.address ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div
        class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center"
        :class="status.payment ? 'border-green-600 bg-green-600  text-white' : 'border-gray-200 bg-gray-50  text-gray-50'"
      >
        <CheckIcon width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase text-gray-600">Payment</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.payment ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div
        class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center"
        :class="status.payment ? 'border-green-600 bg-green-600  text-white' : 'border-gray-200 bg-gray-50  text-gray-50'"
      >
        <CheckIcon width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase text-gray-600">Submit</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomStepper',
  props: {
    status: { type: Object, required: false, default: () => null }, // selected record
  },

  data() {
    return {
      studenStep: false,
    };
  },
  components: {
    CheckIcon: () => import('~/components/iconCheck'),
  },
  watch: {
    status() {
      console.log('=================stepper watch==========');
      if (this.status) {
      }
    },
  },
  mounted() {
    console.log('=================stepper mounted==========');
  },
};
</script>

