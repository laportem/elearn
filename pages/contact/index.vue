<template>
  <div class="h-full w-full">
    <div v-if="isSubmitting" class="h-full w-full flex items-center justify-center">
      <transition appear name="component-fade" mode="out-in">
        <div class="flex items-center justify-center text-center spinner">
          <CustomSpinner :message="'Submitting your message...'"></CustomSpinner>
        </div>
      </transition>
    </div>
    <div v-else class="h-full">
      <div v-if="submitted" class="py-20 flex flex-col justify-center items-center">
        <CustomSuccess></CustomSuccess>
        <div class="text-xl pt-4">We have successfully received your message</div>
      </div>
      <ValidationObserver v-else ref="form">
        <form class="h-full flex flex-col" @submit.prevent="onSubmit">
          <main class="flex-1">
            <div class="h-full w-full flex flex-col lg:flex-row gap-8">
              <div class="w-full lg:w-1/2 pb-3 trans-fade-in-left">
                <div class="text-2xl text-gray-600 font-semibold">Get in touch</div>
                <div class="text-gray-700 text-lg text-opacity-70 pt-3">Please fill out this form and we will be in touch as soon as possible.</div>
                <div class="py-3"></div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                  <ValidationProvider v-slot="{ errors }" name="firstname" rules="required">
                    <CustomTextField
                      v-model="firstname"
                      :label="'First Name'"
                      name="firstname"
                      :placeholder="'Enter your first name'"
                      class="w-full"
                      :customstyle="'bg-white'"
                      :required="true"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="lastname" rules="required">
                    <CustomTextField
                      v-model="lastname"
                      :label="'Last Name'"
                      name="lastname"
                      :placeholder="'Enter your last name'"
                      class="w-full"
                      :customstyle="'bg-white'"
                      :required="true"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                    <CustomTextField
                      v-model="email"
                      :label="'Email Address'"
                      name="email"
                      :placeholder="'Enter your email address'"
                      class="w-full"
                      :customstyle="'bg-white'"
                      :required="true"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="phone" rules="phone">
                    <CustomTextField
                      v-model="phone"
                      :label="'Phone Number'"
                      name="phone"
                      :placeholder="'Enter your phone number'"
                      class="w-full"
                      :customstyle="'bg-white'"
                      :required="false"
                      :errors="errors"
                    />
                  </ValidationProvider>
                </div>
                <div class="py-1"></div>
                <ValidationProvider v-slot="{ errors }" name="subject" rules="required">
                  <CustomTextField
                    v-model="subject"
                    :label="'Subject'"
                    name="subject"
                    :placeholder="'What is your message about'"
                    class="w-full"
                    :customstyle="'bg-white'"
                    :required="true"
                    :errors="errors"
                  />
                </ValidationProvider>
                <div class="py-1"></div>
                <ValidationProvider v-slot="{ errors }" name="message" rules="required">
                  <CustomTextAreaField
                    v-model="message"
                    :label="'Write your message'"
                    :labelstyle="'pb-2 mlEditFrmLabel'"
                    name="message"
                    :rows="4"
                    :placeholder="'Write your message here...'"
                    class="w-full"
                    :customstyle="'bg-white'"
                    :required="true"
                    :errors="errors"
                  />
                </ValidationProvider>
                <div class="py-1"></div>
                <div class="flex items-center justify-between pt-1 pb-1">
                  <CustomButtonCancel :label="'CANCEL'" @click="goCancel"></CustomButtonCancel>
                  <PrimaryButton :label="'SUBMIT'" :buttonStyle="'px-8 py-4'" type="'submit'"></PrimaryButton>
                </div>
              </div>
              <div
                class="h-full w-full bg-gray-50 lg:w-1/2 lg:px-8 pt-4 pb-2 border-t border-l-0 lg:border-t-0 lg:border-l border-gray-100 trans-fade-in-right"
              >
                <div class="flex items-center justify-center text-center h-full w-full">
                  <div class="text-gray-600 text-xl px-4">Submit your question to us and we will get back to you as soon as possible.</div>
                </div>
                <div class="py-2"></div>
              </div>
            </div>
          </main>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import sugarMixin from '~/mixins/sugar';
import { mapGetters } from 'vuex';

export default {
  components: {
    CustomTextField: () => import('~/components/CustomTextField'),
    CustomTextAreaField: () => import('~/components/CustomTextAreaField'),
    CustomButtonCancel: () => import('~/components/CustomButtonCancel'),
    PrimaryButton: () => import('~/components/CustomButtonPrimary'),
    CustomSpinner: () => import('~/components/CustomSpinner'),
    CustomSuccess: () => import('~/components/success'),
  },
  mixins: [sugarMixin],
  data() {
    return {
      submitted: false,
      isSubmitting: false,
      enrolId: null,
      stuId: null,
      courseId: null,
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      enrolled: 'GET_ENROLLED',
    }),
  },
  mounted() {
    if (this.enrolled && this.enrolled.student) {
      this.enrolId = this.enrolled.enrolment.id ? this.enrolled.enrolment.id : null;
      this.stuId = this.enrolled.student.id ? this.enrolled.student.id : null;
      this.courseId = this.enrolled.enrolment.tc_enrolments_accountsaccounts_ida ? this.enrolled.enrolment.tc_enrolments_accountsaccounts_ida : null;

      this.firstname = this.enrolled.student.first_name ? this.enrolled.student.first_name : null;
      this.lastname = this.enrolled.student.last_name ? this.enrolled.student.last_name : null;
      this.email = this.enrolled.student.email1 ? this.enrolled.student.email1 : null;
      this.phone = this.enrolled.student.phone_work ? this.enrolled.student.phone_work : null;
    }
  },

  methods: {
    goCancel() {
      this.$router.back();
    },

    async onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          this.$toast.error('Please fix the error before continuing.', {
            position: 'top-center',
            timeout: 2000,
          });
          return;
        }
        this.isSubmitting = true;
        const capitalize = ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

        this.firstname = this.firstname ? capitalize(this.firstname.trim()) : null;
        this.lastname = this.lastname ? capitalize(this.lastname.trim()) : null;
        this.email = this.email ? this.email.trim() : null;
        this.phone = this.phone ? this.phone.trim() : null;
        this.subject = this.subject ? this.subject.trim() : null;
        this.message = this.message ? this.message.trim() : null;
        if (this.stuId) {
          this.goCreateCase();
        } else {
          this.goCreateLead();
        }
      });
    },

    async goCreateCase() {
      const _data = {
        name: this.subject,
        description: this.message,
        status: 'New',
        priority: 'P1',
        type: 'Product',
        source: 'Web',
        tc_students_cases_1tc_students_ida: this.stuId,
        account_id: this.courseId,
        tc_enrolments_cases_1tc_enrolments_ida: this.enrolId,
      };
      const _token = await this.getSugarToken();
      if (_token) {
        const _case = await this.postCase(_token, _data);
      }
      this.isSubmitting = false;
      this.submitted = true;
    },

    async goCreateLead() {
      const _data = {
        last_name: this.lastname,
        first_name: this.firstname,
        phone_mobile: this.phone,
        phone_work: this.phone,
        email1: this.email,
        status: 'New',
        lead_source: 'Web Site',
        status_description: this.subject,
        description: this.message,
      };
      const _token = await this.getSugarToken();
      if (_token) {
        const _case = await this.postLead(_token, _data);
      }
      this.isSubmitting = false;
      this.submitted = true;
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
</style>
