<template>
  <div class="h-full w-full mx-auto">
    <ValidationObserver ref="form">
      <form class="h-full flex flex-col" @submit.prevent="goNext">
        <main class="flex-1">
          <div class="text-2xl text-gray-600">About You</div>
          <div class="text-gray-700 text-lg text-opacity-70 pt-1">Please tell us about you.</div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="firstname" rules="required">
              <CustomTextField
                v-model="firstname"
                label="First Name"
                name="firstname"
                placeholder="Enter your firstname..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="lastname" rules="required">
              <CustomTextField
                v-model="lastname"
                label="Last Name"
                name="lastname"
                placeholder="Enter your lastname..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="phone" rules="required|phone">
              <CustomTextField
                v-model="phone"
                label="Phone Number"
                name="phone"
                placeholder="Enter your phone number..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
              <CustomTextField
                v-model="email"
                label="Email"
                name="email"
                placeholder="Enter your email address..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="salutation" rules="">
              <CustomSelectField
                v-model="salutation"
                name="salutation"
                :item="salutation"
                :items="salutationList"
                label="Salutation"
                class="w-full"
                :required="false"
                :errors="errors"
                @input="goSetSelected"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="gender" rules="">
              <CustomSelectField
                v-model="gender"
                name="gender"
                :item="gender"
                :items="genderList"
                label="Gender"
                class="w-full"
                :required="false"
                :errors="errors"
                @input="goSetSelected"
              />
            </ValidationProvider>
          </div>
        </main>
        <footer class="flex flex-row items-center justify-between pt-10">
          <CustomButtonCancel :label="'CANCEL'" @click="goCancel"></CustomButtonCancel>
          <div class="flex gap-10">
            <CustomButtonBack class="hidden" :label="'BACK'" @click="goBack"></CustomButtonBack>
            <CustomButtonNext :label="'NEXT'" type="'submit'"></CustomButtonNext>
          </div>
        </footer>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'StudentForm',
  props: {
    record: { type: Object, required: false, default: () => null },
  },
  components: {
    CustomTextField: () => import('~/components/CustomTextField'),
    CustomSelectField: () => import('~/components/CustomSelectField'),
    CustomButtonCancel: () => import('~/components/CustomButtonCancel'),
    CustomButtonBack: () => import('~/components/CustomButtonBack'),
    CustomButtonNext: () => import('~/components/CustomButtonNext'),
  },

  data() {
    return {
      stuid: null,
      firstname: null,
      lastname: null,
      phone: null,
      email: null,
      salutation: null,
      gender: null,
      genderList: [
        { code: 'Male', label: 'Male' },
        { code: 'Female', label: 'Female' },
        { code: 'notell', label: 'Not Telling' },
      ],
      salutationList: [
        { code: 'Mr.', label: 'Mr.' },
        { code: 'Ms.', label: 'Ms.' },
        { code: 'Mrs.', label: 'Mrs.' },
        { code: 'Dr.', label: 'Dr.' },
        { code: 'Prof.', label: 'Prof.' },
      ],
    };
  },

  watch: {
    record() {
      if (this.record && this.record.student) {
        this.initData();
      }
    },
  },

  mounted() {
    this.$store.commit('SET_IS_STUDENT_FORM', true);
    if (this.record && this.record.student) {
      this.initData();
    }
  },

  methods: {
    initData() {
      this.stuid = this.record.student.id ? this.record.student.id : null;
      this.firstname = this.record.student.firstname ? this.record.student.firstname : null;
      this.lastname = this.record.student.lastname ? this.record.student.lastname : null;
      this.email = this.record.student.email ? this.record.student.email : null;
      this.phone = this.record.student.phone ? this.record.student.phone : null;
      this.salutation = this.record.student.salutation ? this.record.student.salutation : null;
      this.gender = this.record.student.gender ? this.record.student.gender : null;
    },
    goCancel() {
      this.$emit('cancel');
    },
    goSetSelected(value) {
      // no need to set module
    },

    goBack() {
      this.goApply('back');
    },

    goNext() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          this.$toast.error('Please fix the error before continuing.', {
            position: 'top-center',
            timeout: 2000,
          });
          return;
        }
        this.goApply('next');
      });
    },

    goApply(step) {
      const capitalize = ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

      this.firstname = this.firstname ? capitalize(this.firstname.trim()) : null;
      this.lastname = this.lastname ? capitalize(this.lastname.trim()) : null;
      this.email = this.email ? this.email.trim() : null;
      this.phone = this.phone ? this.phone.trim() : null;

      const _data = {
        id: this.stuid,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        salutation: this.salutation,
        gender: this.gender,
      };
      const _payload = { form: 'student', data: _data };
      this.$emit(step, _payload);
    },
  },
};
</script>