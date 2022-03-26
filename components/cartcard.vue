<template>
  <div class="flex gap-2 bg-white">
    <div class="w-1/3 bg-gray-50 p-2">
      <!--<img class="block h-full w-full rounded-md" :src="cart.image" alt="image" loading="lazy" />-->
      <img class="block h-full w-full rounded-md" :src="require(`~/assets/img/${cart.image}.png`)" />
    </div>
    <div class="flex-1 flex flex-col py-2 pr-2">
      <div class="font-semibold text-gray-700 line-clamp-2">{{ cart.title }}</div>
      <div class="font-semibold flex gap-1 text-sm">
        <div class="text-gray-500">By:</div>
        <div class="pl-1 text-gray-700 line-clamp-2">{{ cart.author }}</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="py-2 font-bold text-lg text-green-700 line-clamp-2">
          <span>{{ cart.currency }}</span>
          <span class="pl-0.1">{{ cart.price }}</span>
        </div>
        <button type="button" @click="goRemoveFromCart(cart)">
          <TrashIcon class="h-5 w-5 text-red-600" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CartCardComponent',
  props: {
    cart: { type: Object, required: false, default: () => null },
  },
  components: {
    TrashIcon: () => import('~/components/iconTrash'),
  },
  methods: {
    goRemoveFromCart(item) {
      this.$store.dispatch('DO_DELETE_CART_ITEM', item);
    },
  },
};
</script>