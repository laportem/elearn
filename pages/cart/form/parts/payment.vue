<template>
  <div class="h-full w-full mx-auto">
    <ValidationObserver ref="form">
      <form class="h-full flex flex-col" @submit.prevent="goNext">
        <main class="flex-1">
          <div class="text-2xl text-gray-600">Payment</div>
          <div class="text-gray-700 text-lg text-opacity-70 pt-1">Please enter the payment details</div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="card_type" rules="required">
              <CustomSelectField
                v-model="card_type"
                name="card_type"
                :item="card_type"
                :items="cardTypeList"
                label="Card Type"
                class="w-full"
                :required="true"
                :errors="errors"
                @input="goSetSelected"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="card_name" rules="required">
              <CustomTextField
                v-model="card_name"
                label="Name On Card"
                name="card_name"
                placeholder="Enter the name on the card..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="card_number" rules="required">
              <CustomTextField
                v-model="card_number"
                label="Card Number"
                name="card_number"
                placeholder="Enter the card number..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="expiry_date" rules="required">
              <CustomTextField
                v-model="expiry_date"
                label="Expiry Date"
                name="expiry_date"
                placeholder="Enter the card expiry date (dd/yy)..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="security_code" rules="required">
              <CustomTextField
                v-model="security_code"
                label="Security Code"
                name="security_code"
                placeholder="Enter the card Security Code..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
        </main>
        <footer class="flex flex-row items-center justify-between pt-10">
          <CustomButtonCancel :label="'CANCEL'" @click="goCancel"></CustomButtonCancel>
          <div class="flex gap-10">
            <CustomButtonBack :label="'BACK'" @click="goBack"></CustomButtonBack>
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
  components: {
    CustomTextField: () => import('~/components/CustomTextField'),
    CustomSelectField: () => import('~/components/CustomSelectField'),
    CustomButtonCancel: () => import('~/components/CustomButtonCancel'),
    CustomButtonBack: () => import('~/components/CustomButtonBack'),
    CustomButtonNext: () => import('~/components/CustomButtonNext'),
  },

  data() {
    return {
      card_type: null,
      card_name: null,
      card_number: null,
      expiry_date: null,
      security_code: null,
      cardTypeList: [
        { code: 'Visa', label: 'Visa' },
        { code: 'MasterCard', label: 'MasterCard' },
        { code: 'American Express', label: 'American Express' },
        { code: 'Dinners Club', label: 'Dinners Club' },
        { code: 'Discover', label: 'Discover' },
      ],
    };
  },

  mounted() {
    this.$store.commit('SET_IS_STUDENT_FORM', false);
    const _data = this.$store.getters['GET_FORM_DATA'];
    if (_data && _data.payment) {
      this.card_type = _data.payment.card_type ? _data.payment.card_type : null;
      this.card_name = _data.payment.card_name ? _data.payment.card_name : null;
      this.card_number = _data.payment.card_number ? _data.payment.card_number : null;
      this.expiry_date = _data.payment.expiry_date ? _data.payment.expiry_date : null;
      this.security_code = _data.payment.security_code ? _data.payment.security_code : null;
    }
  },

  methods: {
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

      this.card_name = this.card_name ? capitalize(this.card_name.trim()) : null;
      this.card_number = this.card_number ? this.card_number.trim() : null;
      this.expiry_date = this.expiry_date ? this.expiry_date.trim() : null;
      this.security_code = this.security_code ? this.security_code.trim() : null;

      const _data = {
        card_type: this.card_type,
        card_name: this.card_name,
        card_number: this.card_number,
        expiry_date: this.expiry_date,
        security_code: this.security_code,
      };
      const _payload = { form: 'payment', data: _data };
      this.$emit(step, _payload);
    },
  },
};
</script>