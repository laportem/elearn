export const strict = false;

export const state = () => ({
  isStudentForm: false,
  samples: [],
  category: 0,
  products: [],
  categories: [],
  carts: [],
  formdata: null,
  enrolled: null,
});

export const getters = {
  GET_PRODUCTS: (state) => {
    if (state.category === 0) {
      return state.products;
    } else {
      return state.products.filter((el) => el.category == state.category);
    }
  },
  GET_CATEGORIES: (state) => {
    return state.categories;
  },
  GET_CARTS: (state) => {
    return state.carts;
  },
  GET_CARTS_COUNT: (state) => {
    return state.carts.length;
  },
  GET_PRODUCTS_BY_ID: (state) => (id) => {
    const _item = state.products.filter((el) => el.id == id);
    return _item && _item.length > 0 ? _item[0] : null;
  },
  GET_FORM_DATA: (state) => {
    return state.formdata;
  },
  GET_IS_STUDENT_FORM: (state) => {
    return state.isStudentForm;
  },
  IS_PRODUCT_IN_CART: (state) => (id) => {
    const _item = state.carts.filter((el) => el.id === id);
    return _item && _item.length > 0 ? true : false;
  },
  GET_SELECTED_CATEGORY_ID: (state) => {
    return state.category;
  },
  GET_SELECTED_CATEGORY_CAPTION: (state) => {
    const _item = state.categories.filter((el) => el.id == state.category);
    if (_item && _item.length > 0) {
      return _item[0].caption;
    } else {
      return 'Unknown Category';
    }
  },
  GET_SAMPLE_DATA: (state) => {
    return state.samples;
  },
  GET_ENROLLED: (state) => {
    return state.enrolled;
  },
};

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  },
  SET_CARTS(state, payload) {
    if (payload) {
      const _index = state.carts.findIndex((el) => el.id === payload.id);
      if (_index >= 0) {
        state.carts.splice(_index, 1);
        state.carts.push(payload);
      } else {
        state.carts.push(payload);
      }
    }
  },
  SET_SELECTED_CATEGORY(state, payload) {
    state.category = payload;
  },
  SET_FORM_DATA(state, payload) {
    if (payload && payload.form === 'student') {
      if (payload.data) {
        state.formdata.student = payload.data;
      }
    }
    if (payload && payload.form === 'address') {
      if (payload.data) {
        state.formdata.address = payload.data;
      }
    }
    if (payload && payload.form === 'payment') {
      if (payload.data) {
        state.formdata.payment = payload.data;
      }
    }
  },
  SET_INITAL_FORM_DATA(state, payload) {
    state.formdata = payload;
  },
  SET_IS_STUDENT_FORM(state, payload) {
    state.isStudentForm = payload;
  },
  DELETE_FROM_CART(state, payload) {
    const _index = state.carts.findIndex((el) => el.id === payload.id);
    if (_index >= 0) {
      state.carts.splice(_index, 1);
    }
  },
  SET_SAMPLE_DATA(state, payload) {
    state.samples = payload;
  },
  SET_ENROLLED(state, payload) {
    state.enrolled = payload;
  },
};

export const actions = {
  async DO_DELETE_CART_ITEM({ commit }, payload) {
    if (payload) {
      commit('DELETE_FROM_CART', {
        ...payload,
      });
    }
  },
};
