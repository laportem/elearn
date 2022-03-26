<template>
  <div>
    <div class="flex items-start justify-start pb-6">
      <h1 class="text-lg uppercase font-semibold text-gray-600">Categories</h1>
    </div>
    <ul v-if="categories && categories.length > 0">
      <li v-for="el in categories" :key="el.id" class="flex flex-col pb-3">
        <span :class="el.id === selected ? 'menuSelected' : 'menuNotSelected'" class="menu" @click="goSelect(el)">
          {{ el.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NavbarComponent',
  computed: {
    ...mapGetters({
      categories: 'GET_CATEGORIES',
      selected: 'GET_SELECTED_CATEGORY_ID',
    }),
  },

  methods: {
    goSelect(item) {
      this.$store.commit('SET_SELECTED_CATEGORY', item.id);
    },
  },
};
</script>
<style scoped>
.menu {
  @apply text-base cursor-pointer hover:text-opacity-90;
}
.menuSelected {
  @apply text-gray-600 font-medium;
}
.menuNotSelected {
  @apply text-gray-400 font-normal;
}
</style>