<template>
  <div class="flex items-center">
    <div class="flex items-center relative">
      <div class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center" :class="studentClass.circle">
        <CheckIcon v-if="studentClass.showIcon" width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase" :class="studentClass.title">About You</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.student ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center" :class="addressClass.circle">
        <CheckIcon v-if="addressClass.showIcon" width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase" :class="addressClass.title">Contacts</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.address ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center" :class="paymentClass.circle">
        <CheckIcon v-if="paymentClass.showIcon" width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase" :class="paymentClass.title">Payment</div>
    </div>
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out" :class="status.payment ? 'border-green-600' : 'border-gray-200'"></div>

    <div class="flex items-center relative">
      <div class="rounded-full transition duration-500 ease-in-out h-10 w-10 py-2 border-2 text-center" :class="submitClass.circle">
        <CheckIcon v-if="submitClass.showIcon" width="100%" height="100%"></CheckIcon>
      </div>
      <div class="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-medium uppercase" :class="submitClass.title">Submit</div>
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
      studentClass: {
        circle: 'border-green-600 bg-gray-50 text-gray-50',
        title: '',
        showIcon: false,
      },
      addressClass: {
        circle: 'border-gray-200 bg-gray-50  text-gray-50',
        title: 'text-gray-300',
        showIcon: false,
      },
      paymentClass: {
        circle: 'border-gray-200 bg-gray-50  text-gray-50',
        title: 'text-gray-300',
        showIcon: false,
      },
      submitClass: {
        circle: 'border-gray-200 bg-gray-50  text-gray-50',
        title: 'text-gray-300',
        showIcon: false,
      },
    };
  },
  components: {
    CheckIcon: () => import('~/components/iconCheck'),
  },
  watch: {
    status() {
      if (this.status) {
        if (this.status.student) {
          this.studentClass.circle = 'border-green-600 bg-green-600 text-white';
          this.studentClass.title = 'text-green-600';
          this.studentClass.showIcon = true;
        } else {
          this.studentClass.circle = 'border-green-600 bg-gray-50 text-gray-50';
          this.studentClass.title = '';
          this.studentClass.showIcon = false;
        }

        if (this.status.address) {
          this.addressClass.circle = 'border-green-600 bg-green-600 text-white';
          this.addressClass.title = 'text-green-600';
          this.addressClass.showIcon = true;
        } else {
          if (this.status.student) {
            this.addressClass.circle = 'border-green-600 bg-gray-50 text-gray-50';
            this.addressClass.title = '';
            this.addressClass.showIcon = false;
          } else {
            this.addressClass.circle = 'border-gray-200 bg-gray-50  text-gray-50';
            this.addressClass.title = 'text-gray-300';
            this.addressClass.showIcon = false;
          }
        }

        if (this.status.payment) {
          this.paymentClass.circle = 'border-green-600 bg-green-600 text-white';
          this.paymentClass.title = 'text-green-600';
          this.paymentClass.showIcon = true;
        } else {
          if (this.status.address) {
            this.paymentClass.circle = 'border-green-600 bg-gray-50 text-gray-50';
            this.paymentClass.title = '';
            this.paymentClass.showIcon = false;
          } else {
            this.paymentClass.circle = 'border-gray-200 bg-gray-50  text-gray-50';
            this.paymentClass.title = 'text-gray-300';
            this.paymentClass.showIcon = false;
          }
        }

        if (this.status.submit) {
          this.submitClass.circle = 'border-green-600 bg-green-600 text-white';
          this.submitClass.title = 'text-green-600';
          this.submitClass.showIcon = true;
        } else {
          if (this.status.payment) {
            this.submitClass.circle = 'border-green-600 bg-gray-50 text-gray-50';
            this.submitClass.title = '';
            this.submitClass.showIcon = false;
          } else {
            this.submitClass.circle = 'border-gray-200 bg-gray-50  text-gray-50';
            this.submitClass.title = 'text-gray-300';
            this.submitClass.showIcon = false;
          }
        }
      }
    },
  },
};
</script>

