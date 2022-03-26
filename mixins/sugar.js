export default {
  methods: {
    async getSugarToken() {
      let _token = null;
      const _body = {
        username: 'manfred.laporte',
        password: 'Manfred123',
        grant_type: 'password',
        client_id: 'sugar',
        client_secret: '',
        platform: 'turkcell',
      };
      const _head = { 'Content-Type': 'application/json' };
      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/oauth2/token', _body, { headers: _head })
        .then((_response) => {
          _token = _response && _response.data && _response.data.access_token ? _response.data.access_token : null;
          return _response.data.access_token;
        })
        .catch((error) => {
          console.log(error);
        });
      return _token;
    },

    async postStudent(token, payload) {
      let _id = null;
      const _body = {
        first_name: payload.student.firstname,
        last_name: payload.student.lastname,
        email1: payload.student.email,
        phone_mobile: payload.student.phone,
        phone_home: payload.student.phone,
        phone_work: payload.student.phone,
        salutation: payload.student.salutation ? payload.student.salutation.code : null,
        gender: payload.student.gender ? payload.student.gender.code : null,
        primary_address_street: payload.address.address,
        primary_address_city: payload.address.city,
        primary_address_postalcode: payload.address.postcode,
        primary_address_country: payload.address.country,
        alt_address_street: payload.address.address,
        alt_address_city: payload.address.city,
        alt_address_postalcode: payload.address.postcode,
        alt_address_country: payload.address.country,
        language_preference: payload.address.locale ? payload.address.locale.code : null,
        preferred_contact_method: payload.address.channel ? payload.address.channel.code : null,
      };
      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };
      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/tc_Students', _body, { headers: _head })
        .then((_response) => {
          _id = _response && _response.data && _response.data.id ? _response.data.id : null;
          return _id;
        })
        .catch((error) => {
          console.log(error);
        });
      return _id;
    },

    async getCourse(token, payload) {
      if (!payload) {
        return;
      }

      let _body = null;

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      if (payload.length == 1) {
        _body = {
          filter: [{ slug_c: payload[0].slug }],
          fields: ['id', 'name', 'slug_c'],
        };
      } else {
        let _filter = [];
        payload.forEach((el) => {
          var _item = { slug_c: el.slug };
          _filter.push(_item);
        });

        _body = {
          filter: [{ $or: _filter }],
          fields: ['id', 'name', 'slug_c'],
        };
      }

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/Accounts/filter', _body, { headers: _head })
        .then((_response) => {
          return _response.data && _response.data.records ? _response.data.records : [];
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },

    async postEnrolment(token, student, courses, carts, stuId) {
      if (!carts && carts.length <= 0) {
        return;
      }

      let _outcome = [];
      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };
      const _studentId = student;

      carts.forEach(async (el) => {
        const _course = courses.find((c) => c.slug_c === el.slug);
        const _courseId = _course && _course.id ? _course.id : null;
        const _eSlug = stuId + '-' + _course.slug_c;
        const _body = {
          stage: 'Submitted',
          start_date: new Date(),
          payment_amount: el.price,
          stage: 'Submitted',
          payment_status: 'Not Paid',
          currency_id: '5f7e1fd6-8e3c-11ec-b5b3-0242ac130009',
          tc_enrolments_tc_studentstc_students_ida: _studentId,
          tc_enrolments_accountsaccounts_ida: _courseId,
          onboarding_uri_c: _eSlug,
        };

        const _response = await this.$axios
          .post('/turkcell/rest/v11_1/tc_Enrolments', _body, { headers: _head })
          .then((_response) => {
            return 1;
          })
          .catch((error) => {
            console.log(error);
            return 0;
          });
        _outcome.push(_response);
      });
      return _outcome;
    },

    async getEnrolment(token, payload) {
      if (!payload) {
        return;
      }

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      const _body = {
        filter: [{ id: payload }],
        fields: [
          'id',
          'name',
          'locale_c',
          'onboarding_uri_c',
          'tc_enrolments_tc_students_name',
          'tc_enrolments_tc_studentstc_students_ida',
          'tc_enrolments_accounts_name',
          'tc_enrolments_accountsaccounts_ida',
        ],
      };

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/tc_Enrolments/filter', _body, { headers: _head })
        .then((_response) => {
          return _response.data && _response.data.records ? _response.data.records : [];
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },

    async getStudentByEmail(token, payload) {
      if (!payload) {
        return;
      }

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      const _body = {
        filter: [{ email: payload }],
        fields: ['id', 'name'],
      };

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/tc_Students/filter', _body, { headers: _head })
        .then((_response) => {
          return _response.data && _response.data.records ? _response.data.records : [];
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },

    async getStudentById(token, payload) {
      if (!payload) {
        return;
      }

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      const _body = {
        filter: [{ id: payload }],
        fields: ['id', 'first_name', 'last_name', 'phone_work', 'email1'],
      };

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/tc_Students/filter', _body, { headers: _head })
        .then((_response) => {
          return _response.data && _response.data.records ? _response.data.records : [];
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },

    async postCase(token, payload) {
      if (!payload) {
        return;
      }

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      const _body = payload;

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/Cases', _body, { headers: _head })
        .then((_response) => {
          return _response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },

    async postLead(token, payload) {
      if (!payload) {
        return;
      }

      const _head = { 'OAuth-Token': token, 'Content-Type': 'application/json' };

      const _body = payload;

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/Leads', _body, { headers: _head })
        .then((_response) => {
          return _response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return _response;
    },
  },
};
