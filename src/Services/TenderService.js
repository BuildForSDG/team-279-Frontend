// const axios = require('axios');

module.exports = {
/* validate: async (olu) => {
    try {
      const url = 'https://team-279-api.herokuapp.com/api/tenders/';
      const urienc = encodeURIComponent(url + olu);
      const uridec = decodeURIComponent(urienc);
      const response = await axios.get(uridec, { crossDomain: true });
      console.log('The value is: ', response);
      console.log('The value is: ', uridec);
    } catch (error) {
      console.error(error);
    }
  },
  login: () => {
    console.log('Hello 2');
  }, */
  getTender: (Value) => fetch(`https://team-279-api.herokuapp.com/api/tenders/${Value}`).then((res) => res.json())
};
