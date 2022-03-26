<template>
  <div class="w-full h-full">
    <transition appear v-if="loading" name="component-fade" mode="out-in">
      <div class="flex items-center justify-center text-center spinner">
        <CustomSpinner :message="'Loading...'"></CustomSpinner>
      </div>
    </transition>
    <transition appear v-else name="component-fade" mode="out-in">
      <French v-if="locale === 'fr_FR'" :enrolment="enrolment" :image="image"></French>
      <English v-else :enrolment="enrolment" :image="image"></English>
    </transition>
  </div>
</template>
<script>
import sugarMixin from '~/mixins/sugar';
import French from './french.vue';
import English from './english.vue';

export default {
  name: 'StartPage',
  fetchOnServer: false,
  fetchDelay: 100,
  mixins: [sugarMixin],
  components: {
    CustomSpinner: () => import('~/components/CustomSpinner'),
    French,
    English,
  },

  data() {
    return {
      locale: 'en_UK',
      loading: false,
      enrolment: null,
      image: 'placeholder-image',
    };
  },

  async fetch() {
    this.loading = true;
    const _enrolId = this.$route.query.id;
    if (_enrolId) {
      const _token = await this.getSugarToken();
      if (_token) {
        const _enrolment = await this.getEnrolment(_token, _enrolId);
        if (_enrolment && _enrolment.length > 0) {
          this.enrolment = _enrolment[0];
          this.locale = _enrolment[0].locale_c;
          const _slug = this.enrolment.onboarding_uri_c;
          const _image = _slug.substring(_slug.indexOf('-') + 1);
          if (_image) {
            this.image = _image;
          }
          const studentId = this.enrolment.tc_enrolments_tc_studentstc_students_ida;
          const _student = await this.getStudentById(_token, studentId);
          if (_student && _student.length > 0) {
            const _data = {
              enrolment: _enrolment[0],
              student: _student[0],
            };
            this.$store.commit('SET_ENROLLED', _data);
          }
        }
      }
    }
    this.loading = false;
  },
};
</script>
<style scoped>
.spinner {
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>