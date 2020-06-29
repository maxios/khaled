const axios = require('axios');

exports.handler = function(event, context, callback) {
    axios({
      method: 'GET',
      url: 'https://getpocket.com/v3/get',
      headers: {'Access-Control-Allow-Origin': '*'},
      params: {
        "consumer_key": "91798-b0b9c7e130c08d13a3163f50",
        "access_token": "e00ae51f-fab6-0464-e9f5-dbf726",
        "sort": "newest",
        "count": 2,
        "offset": 0,
        "tag": "public"
      }
    })
    .then(response => {
      callback(null, {statusCode: 200, body: JSON.stringify(response.data)})
    })
    .catch(err => {
      callback(null, { statusCode: 400, body: JSON.stringify(err) })
    })
}
