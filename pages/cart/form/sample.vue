<template>
  <div class="h-full w-full">
    <div v-if="isloading" class="flex items-center justify-center text-center">Loading...</div>
    <div v-else class="flex items-center justify-center text-center w-full">
      <div v-if="samples" class="w-full">
        <div v-for="(sample, index) in samples" :key="index" class="w-full my-3">
          <button class="w-full" @click="$emit('click', sample)" type="button">
            <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-2 items-center justify-left antialiased gap-4 hover:bg-gray-500">
              <div class="bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-center text-gray-500 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="md:flex-1 w-full flex flex-row flex-wrap">
                <div class="w-full text-left font-semibold relative text-base text-white">
                  <span>{{ sample.student.salutation.label }}</span>
                  <span class="pl-1">{{ sample.student.firstname }}</span>
                  <span class="pl-1">{{ sample.student.lastname }}</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div v-else class="text-lg text-center font-medium text-red-500">NO DATA</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SamplePage',
  fetchOnServer: false,
  fetchDelay: 2000,

  data() {
    return {
      isloading: false,
    };
  },

  computed: {
    ...mapGetters({
      samples: 'GET_SAMPLE_DATA',
    }),
  },

  async fetch() {
    this.isloading = true;
    const fetchSample = () => import('~/data/students.json').then((m) => m.default || m);
    const _students = await fetchSample();
    this.$store.commit('SET_SAMPLE_DATA', _students);
    this.isloading = false;
  },
};
</script>
