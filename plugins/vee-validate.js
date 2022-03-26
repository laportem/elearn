import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate';
import { required, email, min, confirmed, max } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  ...required,
  message: 'Required',
});
extend('email', {
  ...email,
  message: 'Invalid email',
});
extend('min', min);
extend('confirmed', confirmed);
extend('max', max);
extend('maxtextarea', max);
extend('money', {
  validate: (money) => {
    return /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/.test(money);
  },
});

extend('phone', {
  message: 'Invalid phone number',
  validate: (phone) => {
    return /^(\(?\+?[0-9]*\)?)?[0-9_\- \\(\\)]*$/.test(phone);
  },
});
extend('url', {
  validate: (url) => {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
  },
});
