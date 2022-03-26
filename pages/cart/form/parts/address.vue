<template>
  <div class="h-full w-full mx-auto">
    <ValidationObserver ref="form">
      <form class="h-full flex flex-col" @submit.prevent="goNext">
        <main class="flex-1">
          <div class="text-2xl text-gray-600">Contacts</div>
          <div class="text-gray-700 text-lg text-opacity-70 pt-1">Please enter your address and comms perferences.</div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="address" rules="required">
              <CustomTextAreaField
                v-model="address"
                label="Address"
                name="address"
                placeholder="Enter your address..."
                class="w-full"
                :rows="3"
                :maxlength="2000"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="city" rules="required">
              <CustomTextField v-model="city" label="City" name="city" placeholder="Enter city..." class="w-full" :required="true" :errors="errors" />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="postcode" rules="required">
              <CustomTextField
                v-model="postcode"
                label="Postal Code"
                name="postcode"
                placeholder="Enter post/zip code..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="country" rules="required">
              <CustomTextField
                v-model="country"
                label="Country"
                name="country"
                placeholder="Enter country..."
                class="w-full"
                :required="true"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <ValidationProvider v-slot="{ errors }" name="locale" rules="">
              <CustomSelectField
                v-model="locale"
                name="locale"
                :item="locale"
                :items="localeList"
                label="Preferred Language"
                class="w-full"
                :required="false"
                :errors="errors"
                @input="goSetSelected"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="channel" rules="">
              <CustomSelectField
                v-model="channel"
                name="channel"
                :item="channel"
                :items="channelList"
                label="Preferred Contact Method"
                class="w-full"
                :required="false"
                :errors="errors"
                @input="goSetSelected"
              />
            </ValidationProvider>
          </div>
          <div class="py-2"></div>
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
    CustomTextAreaField: () => import('~/components/CustomTextAreaField'),
    CustomSelectField: () => import('~/components/CustomSelectField'),
    CustomButtonCancel: () => import('~/components/CustomButtonCancel'),
    CustomButtonBack: () => import('~/components/CustomButtonBack'),
    CustomButtonNext: () => import('~/components/CustomButtonNext'),
  },

  data() {
    return {
      address: null,
      city: null,
      postcode: null,
      country: null,
      locale: null,
      channel: null,
      localeList: [
        { code: 'tr_TR', label: 'Turkish' },
        { code: 'en_UK', label: 'English' },
        { code: 'fr_FR', label: 'French' },
        { code: 'de_DE', label: 'German' },
        { code: 'es_ES', label: 'Spanish' },
        { code: 'ar_SA', label: 'Arabic' },
        { code: 'zh_CN', label: 'Chinese' },
      ],
      channelList: [
        { code: 'Email', label: 'Email' },
        { code: 'Social Media', label: 'Social Media' },
        { code: 'Phone', label: 'Phone' },
        { code: 'SMS', label: 'SMS' },
        { code: 'Post', label: 'Post' },
      ],
    };
  },

  mounted() {
    this.$store.commit('SET_IS_STUDENT_FORM', false);
    const _data = this.$store.getters['GET_FORM_DATA'];
    if (_data && _data.address) {
      this.address = _data.address.address ? _data.address.address : null;
      this.city = _data.address.city ? _data.address.city : null;
      this.postcode = _data.address.postcode ? _data.address.postcode : null;
      this.country = _data.address.country ? _data.address.country : null;
      this.locale = _data.address.locale ? _data.address.locale : null;
      this.channel = _data.address.channel ? _data.address.channel : null;
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
      this.address = this.address ? this.address.trim() : null;
      this.city = this.city ? this.city.trim() : null;
      this.postcode = this.postcode ? this.postcode.trim() : null;
      this.country = this.country ? this.country.trim() : null;

      const _data = {
        address: this.address,
        city: this.city,
        postcode: this.postcode,
        country: this.country,
        locale: this.locale,
        channel: this.channel,
      };
      const _payload = { form: 'address', data: _data };
      this.$emit(step, _payload);
    },
  },
};
</script>