<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex flex-col gap-4 py-1 px-3">
      <CustomStepper :status="{ student: doneStudent, address: doneAddress, payment: donePayment, submit: doneSubmit }"></CustomStepper>
      <div class="py-2"></div>
      <transition appear v-if="submitting" name="component-fade" mode="out-in">
        <div class="flex items-center justify-center text-center spinner">
          <CustomSpinner :message="'Submitting your appliction...'"></CustomSpinner>
        </div>
      </transition>

      <transition v-else name="slide-fade" mode="out-in">
        <div v-if="submitted">
          <Outcome :status="success"></Outcome>
        </div>
        <div v-else>
          <StudentForm :record="record" v-if="!doneStudent" @cancel="goCancel" @back="goBack" @next="goNext"></StudentForm>
          <AddressForm v-if="doneStudent && !doneAddress" @cancel="goCancel" @back="goBack" @next="goNext"></AddressForm>
          <PaymentForm v-if="doneAddress && !donePayment" @cancel="goCancel" @back="goBack" @next="goNext"></PaymentForm>
          <SubmitForm v-if="donePayment && !doneSubmit" @cancel="goCancel" @back="goBack" @next="goNext"></SubmitForm>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import sugarMixin from '~/mixins/sugar';

export default {
  name: 'IndexPage',
  fetchOnServer: false,
  fetchDelay: 2000,
  mixins: [sugarMixin],
  props: {
    record: { type: Object, required: false, default: () => null },
  },
  components: {
    StudentForm: () => import('./parts/student'),
    AddressForm: () => import('./parts/address'),
    PaymentForm: () => import('./parts/payment'),
    SubmitForm: () => import('./parts/submit'),
    Outcome: () => import('./outcome'),
    CustomStepper: () => import('~/components/CustomStepper'),
    CustomSpinner: () => import('~/components/CustomSpinner'),
  },

  data() {
    return {
      submitting: false,
      doneStudent: false,
      doneAddress: false,
      donePayment: false,
      doneSubmit: false,
      submitted: false,
      success: false,
    };
  },

  methods: {
    goCancel() {
      this.$router.push('/');
    },

    goBack(value) {
      if (value && value.form === 'student') {
        this.doneStudent = false;
        this.doneAddress = false;
        this.donePayment = false;
        this.doneSubmit = false;
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
        }
      }

      if (value && value.form === 'address') {
        this.doneStudent = false;
        this.doneAddress = false;
        this.donePayment = false;
        this.doneSubmit = false;
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
        }
      }

      if (value && value.form === 'payment') {
        this.doneStudent = true;
        this.doneAddress = false;
        this.donePayment = false;
        this.doneSubmit = false;
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
        }
      }

      if (value && value.form === 'submit') {
        this.doneStudent = true;
        this.doneAddress = true;
        this.donePayment = false;
        this.doneSubmit = false;
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
        }
      }
    },

    goNext(value) {
      if (value && value.form === 'student') {
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
          this.doneStudent = true;
          this.doneAddress = false;
          this.donePayment = false;
          this.doneSubmit = false;
        }
      }
      if (value && value.form === 'address') {
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
          this.doneStudent = true;
          this.doneAddress = true;
          this.donePayment = false;
          this.doneSubmit = false;
        }
      }
      if (value && value.form === 'payment') {
        if (value.data) {
          this.$store.commit('SET_FORM_DATA', value);
          this.doneStudent = true;
          this.doneAddress = true;
          this.donePayment = true;
          this.doneSubmit = false;
        }
      }

      if (value && value.form === 'submit') {
        this.doneStudent = true;
        this.doneAddress = true;
        this.donePayment = true;
        this.goSubmitCRM();
        //const _fdata = this.$store.getters['GET_FORM_DATA'];
        //console.log(_fdata);
      }
    },

    async goSubmitCRM() {
      this.submitting = true;
      const _token = await this.getSugarToken();
      if (_token) {
        const _fdata = this.$store.getters['GET_FORM_DATA'];
        const _stuId = _fdata && _fdata.student && _fdata.student.id ? _fdata.student.id : null;
        const _sudentId = await this.postStudent(_token, _fdata);
        const _carts = this.$store.getters['GET_CARTS'];
        const _courses = await this.getCourse(_token, _carts);
        const _enrolled = await this.postEnrolment(_token, _sudentId, _courses, _carts, _stuId);
        if (_enrolled.includes(0)) {
          this.submitted = true;
          this.doneSubmit = false;
          this.success = false;
        } else {
          this.submitted = true;
          this.doneSubmit = true;
          this.success = true;
        }
      }
      this.submitting = false;
    },
  },
};
</script>
<style scoped>
.spinner {
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>