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
        platform: 'base',
      };
      const _head = {
        'Content-Type': 'application/json',
      };
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
      const _head = {
        'OAuth-Token': token,
        'Content-Type': 'application/json',
      };
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
      console.log('======getCourse========');
      console.log(payload);
      if (payload) {
        return;
      }

      let _id = null;
      let _filter = null;
      let _body = null;
      if (payload && payload.length == 1) {
        _filter = {
          filter: [{ 'accounts.slug_c': payload[0].slug }],
          fields: ['id', 'name'],
        };
      }
      console.log(_filter);
      /*
      const _filter = [
        {
          $or: [
            {
              first_name: 'Maria',
            },
            {
              first_name: 'Arnold',
            },
          ],
        },
      ];*/

      const _head = {
        'OAuth-Token': token,
        'Content-Type': 'application/json',
      };

      if (payload && payload.length == 1) {
        _body = {
          filter: [{ slug_c: payload[0].slug }],
          fields: ['id', 'name'],
        };
      }

      const _response = await this.$axios
        .post('/turkcell/rest/v11_1/Accounts/filter', _body, { headers: _head })
        .then((_response) => {
          console.log(_response);
          _id = _response && _response.data && _response.data.id ? _response.data.id : null;
          return _id;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(_id);
      return _id;
    },
  },
};
