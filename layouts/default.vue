<template>
  <div class="flex justify-center">
    <div class="max-w-screen-xl flex flex-col min-h-screen w-full gap-2">
      <Header />
      <Nuxt class="flex-grow" />
      <Footer class="mt-10" />
    </div>
  </div>
</template>

<script>
import Header from './../components/header';
import Footer from './../components/footer';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>