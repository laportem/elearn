<template>
  <nav class="bg-white border-gray-200 py-6 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <svg class="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA" />
          <path
            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
            fill="#A4CAFE"
          />
          <path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2" />
        </svg>
        <span class="self-center font-semibold whitespace-nowrap text-2xl text-gray-600 dark:text-white">
          <nuxt-link :to="`/`"> T-Learning </nuxt-link>
        </span>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-lg font-medium">
          <nuxt-link :to="`/`">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                >HOME</a
              >
            </li>
          </nuxt-link>
          <nuxt-link :to="`/`">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >OUR COURSES</a
              >
            </li>
          </nuxt-link>
          <nuxt-link :to="`/`">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >SERVICES</a
              >
            </li>
          </nuxt-link>
          <nuxt-link :to="`/`">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >ABOUT</a
              >
            </li>
          </nuxt-link>
          <nuxt-link :to="`/contact`">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >CONTACT</a
              >
            </li>
          </nuxt-link>
          <nuxt-link :to="`/`">
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
              ></a>
            </li>
          </nuxt-link>
        </ul>
      </div>

      <div class="flex items-center justify-center gap-3">
        <nuxt-link :to="`/cart`">
          <button class="rounded-lg bg-green-600 flex items-center justify-center px-5 py-2.5 text-white hover:bg-green-700">
            <Cart class="text-white" />
            <span class="ml-2 font-semibold text-white">{{ cartcount }}</span>
          </button>
        </nuxt-link>

        <div class="px-1"></div>
        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center">
          SIGN IN
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-3 text-center"
        >
          SIGN UP
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderComponent',
  components: {
    Cart: () => import('~/components/iconCart'),
  },

  computed: {
    ...mapGetters({
      cartcount: 'GET_CARTS_COUNT',
    }),
  },
};
</script>
<style scoped>
.btn {
}
</style>