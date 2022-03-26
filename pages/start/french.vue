<template>
  <div class="2xl:container 2xl:mx-auto">
    <div class="px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 md:mt-6 lg:mt-8">
        <div class="col-span-2 bg-gray-50 dark:bg-gray-800 p-4">
          <div class="flex gap-6 p-2">
            <div class="flex">
              <img
                class="block w-full rounded-md"
                src="https://fakeimg.pl/350x200/85C1E9,128/000,255/?text=Python Hero&font=lobster"
                alt="image"
                loading="lazy"
              />
            </div>
            <div class="text-xl flex flex-col justify-center">
              <div class="text-2xl pb-3 text-left">
                <span class="text-gray-500">Bonjour</span>
                <span class="text-gray-800 font-semibold">{{ enrolment.tc_enrolments_tc_students_name }}</span>
              </div>
              <div class="text-lg font-meduim text-gray-700 pb-1">
                Merci d'avoir choisi d'apprendre <span class="font-semibold">'{{ enrolment.tc_enrolments_accounts_name }}'</span> avec nous. Nous apprécions
                grandement que vous ayez décidé de travailler avec nous pour établir votre profil de compétences.
              </div>
              <div class="text-lg font-meduim text-gray-700 pb-4">
                Nous sommes ici pour rendre votre expérience d'apprentissage avec nous aussi fructueuse que possible
              </div>
              <button
                type="button"
                class="
                  flex
                  text-lg
                  justify-center
                  w-1/2
                  items-center
                  text-white
                  bg-green-600
                  hover:bg-green-700
                  focus:ring-4 focus:ring-green-300
                  font-medium
                  rounded-lg
                  px-3
                  py-3
                  text-center
                "
              >
                COMMENCEZ VOTRE COURS
              </button>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 p-4 flex flex-col gap-4 items-center justify-center">
          <div>
            <h2 class="text-2xl leading-tight font-semibold text-center">Nous contacter</h2>
            <p class="text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="flex justify-center items-center">
            <svg
              class="h-20 w-20"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 33.834 33.834"
              style="enable-background: new 0 0 33.834 33.834"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M32.253,29.334v4.5H1.581v-4.501c0-2.125,1.832-4.741,4.07-5.804l4.98-2.366l3.457,7.204l1.77-4.799
		c0.349,0.066,0.695,0.154,1.059,0.154s0.709-0.088,1.059-0.154l1.68,4.563l3.389-7.048l5.141,2.445
		C30.421,24.591,32.253,27.207,32.253,29.334z M6.105,13.562v-3.25c0-0.551,0.287-1.034,0.72-1.312c0.581-5.058,4.883-9,10.094-9
		s9.514,3.942,10.096,9c0.432,0.278,0.719,0.761,0.719,1.312v3.25c0,0.863-0.699,1.563-1.563,1.563s-1.563-0.7-1.563-1.563v-0.683
		c-0.846,4.255-3.961,8.205-7.688,8.205c-3.727,0-6.842-3.95-7.688-8.205v0.683c0,0.7-0.465,1.286-1.1,1.485
		c0.622,2.117,2.002,3.946,3.908,5.146c0.352-0.116,0.796-0.094,1.227,0.13c0.692,0.36,1.045,1.06,0.783,1.56
		c-0.261,0.5-1.033,0.612-1.729,0.251c-0.508-0.265-0.83-0.71-0.864-1.126c-2.183-1.396-3.731-3.533-4.37-5.998
		C6.513,14.78,6.105,14.22,6.105,13.562z M7.89,8.635c0.047,0.003,0.092,0.004,0.137,0.021C8.14,8.698,8.222,8.779,8.279,8.874
		c0.339,0.144,0.609,0.407,0.775,0.733C9.515,5.286,12.855,3,16.917,3c4.062,0,7.402,2.286,7.863,6.607
		c0.229-0.449,0.664-0.77,1.185-0.837c-0.676-4.393-4.47-7.771-9.048-7.771C12.386,1,8.622,4.309,7.89,8.635z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <div class="text-xl text-center">Envoyez-nous un message si vous avez des questions.</div>
          <nuxt-link :to="`/contact`" class="w-full flex justify-center">
            <button
              type="button"
              class="
                flex
                justify-center
                w-1/2
                items-center
                text-white
                bg-blue-600
                hover:bg-blue-700
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-lg
                px-3
                py-3
                text-center
              "
            >
              ÉCRIVEZ-NOUS
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
        <div class="bg-gray-50 flex flex-col gap-4 items-center p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div class="flex justify-end items-center space-x-2 pt-2">
            <div class="text-xl text-center font-medium">Apprenez à connaître vos professeurs pour ce cours.</div>
          </div>
          <button
            type="button"
            class="
              flex
              justify-center
              w-1/2
              items-center
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              px-3
              py-3
              text-center
            "
          >
            ALLEZ APPRENDRE
          </button>
        </div>

        <div class="bg-gray-50 flex flex-col gap-4 items-center p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <div class="flex justify-end items-center space-x-2 pt-2">
            <div class="text-xl text-center font-medium">Passez en revue ce que vous apprendrez dans ce cours.</div>
          </div>
          <button
            type="button"
            class="
              flex
              justify-center
              w-1/2
              items-center
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              px-3
              py-3
              text-center
            "
          >
            ALLER REVOIR
          </button>
        </div>

        <div class="bg-gray-50 flex flex-col gap-4 items-center p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="flex justify-end items-center space-x-2 pt-2">
            <div class="text-xl text-center font-medium">Trouver des informations supplémentaires sur ce cours.</div>
          </div>
          <button
            type="button"
            class="
              flex
              justify-center
              w-1/2
              items-center
              text-white
              bg-blue-600
              hover:bg-blue-700
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              px-3
              py-3
              text-center
            "
          >
            VA CHERCHER
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomStepper',
  props: {
    enrolment: { type: Object, required: false, default: () => null },
  },
};
</script>