<template>
  <div>
    <div class="rounded-t-lg bg-white p-1">
      <!--<img class="block h-40 w-full rounded-md" :src="product.image" alt="image" loading="lazy" /> -->
      <img class="block h-40 w-full rounded-md" :src="require(`~/assets/img/${product.image}.png`)" />
      <div class="py-1"></div>
    </div>
    <div class="px-2 pt-1 pb-4 bg-white rounded-lg">
      <div class="font-semibold text-lg truncate text-gray-700 line-clamp-2">{{ product.title }}</div>
      <div class="py-1 font-bold text-xl truncate text-green-700 line-clamp-2">
        <span>{{ product.currency }}</span>
        <span class="pl-1">{{ product.price }}</span>
      </div>
      <div v-if="product.locale && product.locale.length > 0" class="py-2 flex flex-wrap justify-start space-x-2">
        <span v-for="(el, index) in product.locale" :key="index" class="px-4 py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm">
          {{ el }}
        </span>
      </div>
      <div class="mt-1 text-sm text-gray-700 line-clamp-3">{{ product.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: { type: Object, required: false, default: () => null },
  },
};
</script>