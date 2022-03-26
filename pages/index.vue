<template>
  <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden gap-1">
    <div class="w-full md:w-3/12 flex-shrink flex-grow-0 px-3 py-2 bg-gray-50">
      <div class="sticky top-0 px-4 py-2 w-full">
        <ul class="flex sm:flex-col overflow-hidden content-center justify-between">
          <Navbar></Navbar>
        </ul>
      </div>
    </div>
    <main v-if="products.length > 0" role="main" class="w-full h-full flex-grow px-6 pb-4 -mt-1 overflow-hidden">
      <div class="text-2xl font-semibold text-gray-600">{{ caption }}</div>
      <div class="border-b py-2"></div>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pt-6">
        <div v-for="product in products" :key="product.id" class="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md">
          <nuxt-link :to="`/products/${product.id}`">
            <ProductCard :product="product"></ProductCard>
          </nuxt-link>
        </div>
      </div>
    </main>
    <div v-else class="w-full h-full flex items-center justify-center text-center text-xl text-red-600 font-semibold">No Courses Found</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  fetchOnServer: false,
  fetchDelay: 2000,
  components: {
    Navbar: () => import('~/components/navbar'),
    ProductCard: () => import('~/components/productcard'),
  },
  data() {
    return {
      isloading: false,
    };
  },

  computed: {
    ...mapGetters({
      products: 'GET_PRODUCTS',
      caption: 'GET_SELECTED_CATEGORY_CAPTION',
    }),
  },

  async fetch() {
    this.isloading = true;
    const fetchCategories = () => import('~/data/categories.json').then((m) => m.default || m);
    const fetchProducts = () => import('~/data/products.json').then((m) => m.default || m);
    const _categories = await fetchCategories();

    const _products = await fetchProducts();
    this.$store.commit('SET_CATEGORIES', _categories);
    this.$store.commit('SET_PRODUCTS', _products);
    this.isloading = false;
  },
};
</script>
