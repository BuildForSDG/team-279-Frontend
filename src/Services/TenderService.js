module.exports = {
  ListTender: () => fetch('https://team-279-api.herokuapp.com/api/tenders/').then((res) => res.json()),
  getTender: (Value) => fetch(`https://vtender-api.herokuapp.com/api/v1/tenders/${Value}`).then((res) => res.json()),
  getmytender: () => fetch('https://vtender-api.herokuapp.com/api/v1/tenders').then((res) => res.json())
};
