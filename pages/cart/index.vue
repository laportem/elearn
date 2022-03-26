<template>
  <div>
    <aside>
      <button v-if="isDrawer" class="fixed -inset-0 h-full w-full bg-black opacity-50 cursor-default z-30" tabindex="-1" @click="isDrawer = false"></button>
      <div
        :class="isDrawer ? 'translate-x-0 shadow-2xl' : 'translate-x-full shadow-none'"
        class="transform top-0 right-0 w-full lg:w-1/4 bg-white fixed h-full shadow-2xl overflow-auto ease-in-out transition-all duration-300 z-30"
      >
        <div class="h-full p-6">
          <div class="flex items-center">
            <button @click="isDrawer = false" type="button" class="text-red-600 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
            <div class="px-10 text-lg font-medium">Sample Student Profile</div>
          </div>
          <div class="py-6"><SampleStudents @click="goSelectSample"></SampleStudents></div>
        </div>
      </div>
    </aside>
    <div class="h-full w-full">
      <div v-if="carts && carts.length > 0">
        <div class="pb-6 flex items-center justify-between">
          <div class="text-2xl font-semibold text-gray-600">Your Cart</div>
          <button
            v-if="isStudentForm"
            @click="isDrawer = true"
            type="button"
            class="text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex gap-4">
          <div class="w-full md:w-2/3 px-4 py-4 bg-gray-50">
            <EnrollForm :record="formdata"></EnrollForm>
          </div>
          <div class="w-full md:w-1/3 px-4 py-4 bg-gray-50">
            <div>
              <div class="text-xl text-length font-bold flex">
                <span class="text-gray-500 w-20">Items:</span>
                <span class="text-green-600 flex-1">{{ carts.length }}</span>
              </div>
            </div>
            <div class="text-xl font-bold flex">
              <span class="text-gray-500 w-20">Total:</span>
              <span class="text-green-600 flex-1">{{ goCalculateTotal() }}</span>
            </div>
            <div class="py-3 divide"></div>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="(cart, index) in carts" :key="index" class="border rounded-lg shadow-sm">
                <CartCard :cart="cart"></CartCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="h-full w-full flex flex-col items-center justify-center">
        <div class="text-xl text-red-500 font-semibold">Your cart is empty</div>
        <div class="py-6"></div>
        <nuxt-link :to="`/`">
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-10 py-6 text-center">
            GO SHOP
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CartPage',

  data() {
    return {
      submitting: false,
      isDrawer: false,
      formdata: null,
    };
  },

  components: {
    CartCard: () => import('~/components/cartcard'),
    EnrollForm: () => import('~/pages/cart/form/index'),
    SampleStudents: () => import('~/pages/cart/form/sample'),
  },

  computed: {
    ...mapGetters({
      carts: 'GET_CARTS',
      isStudentForm: 'GET_IS_STUDENT_FORM',
    }),
  },
  methods: {
    goCalculateTotal() {
      const _total = this.carts.map((item) => item.price).reduce((acc, item) => item + acc);
      return 'TL ' + _total;
    },
    goSelectSample(value) {
      if (value) {
        this.$store.commit('SET_INITAL_FORM_DATA', value);
        this.formdata = value;
      }
      this.isDrawer = false;
    },
  },
};
</script>