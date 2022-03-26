<template>
  <div class="py-4">
    <button @click="goBack()" class="flex items-center justify-center text-blue-500">
      <BackBtn class="h-5 w-5 font-semibold text-blue-500" />
      <div class="ml-1 font-semibold text-blue-500">Back</div>
    </button>
    <div v-if="this.product !== null">
      <div class="flex gap-10 py-4">
        <div class="w-1/3 bg-gray-50 p-4">
          <!--<img class="block h-full w-full rounded-md" :src="product.image" alt="image" loading="lazy" />-->
          <img class="block h-full w-full rounded-md" :src="require(`~/assets/img/${product.image}.png`)" />
        </div>
        <div class="flex-1 flex flex-col">
          <div class="text-2xl font-semibold text-gray-700 line-clamp-2">{{ product.title }}</div>
          <div class="text-lg font-semibold flex gap-1">
            <div class="text-gray-500">Created By:</div>
            <div class="pl-1 text-gray-700 line-clamp-2">{{ product.author }}</div>
          </div>
          <div class="py-2 text-xl font-bold text-green-700 line-clamp-2">
            <span>{{ product.currency }}</span>
            <span class="pl-1">{{ product.price }}</span>
          </div>
          <div v-if="product.locale && product.locale.length > 0" class="py-2 flex flex-wrap justify-start space-x-2">
            <span v-for="(el, index) in product.locale" :key="index" class="px-4 py-1 rounded-full text-gray-700 bg-gray-200 font-semibold">
              {{ el }}
            </span>
          </div>

          <div class="text-lg font-semibold pt-4 pb-2 text-gray-500">This course includes:</div>
          <div class="grid grid-cols-2 gap-y-4 gap-x-8 pb-3">
            <div v-for="el in product.learning" :key="el.id" class="flex">
              <li></li>
              <div class="flex-1">{{ el.title }}</div>
            </div>
          </div>
          <div v-if="inCart" class="pt-4 text-center text-lg text-red-500 font-semibold">This course is already in your cart</div>
          <div v-else class="flex pt-4 space-x-2 justify-start">
            <button
              type="button"
              @click="goAddToCart(product)"
              class="
                inline-block
                px-8
                py-4
                bg-blue-600
                text-white
                font-medium
                text-lg
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
              "
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div class="text-lg font-semibold pb-1 text-gray-500">DESCRIPTION</div>
      <div class="text-gray-600">{{ product.description }}</div>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductDetailPage',
  data() {
    return {
      product: null,
      error: null,
    };
  },
  components: {
    BackBtn: () => import('~/components/iconBack'),
  },

  computed: {
    ...mapGetters({
      result: 'IS_PRODUCT_IN_CART',
    }),
    inCart() {
      return this.result(this.product.id);
    },
  },
  mounted() {
    try {
      const _prod = this.$store.getters.GET_PRODUCTS_BY_ID(this.$route.params.id);
      if (_prod) {
        this.product = _prod;
      } else {
        this.$router.push('/');
      }
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    goAddToCart(item) {
      this.$store.commit('SET_CARTS', item);
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
