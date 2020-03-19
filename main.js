 const axios = require('axios');

async function getData() {
  const response = await axios.get('https://my-json-server.typicode.com/irtzmalik/MockAPI/mockAPI');
  return response.data[0].user_id;
}

module.exports = getData;
