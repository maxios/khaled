const axios = require('axios');

exports.handler = function(event, context, callback) {
    axios({
      method: 'GET',
      url: 'https://getpocket.com/v3/get',
      headers: {'Access-Control-Allow-Origin': '*'},
      params: {
        "consumer_key": "90337-5bb5a60c6cdde72488ef9659",
        "access_token": "e00ae51f-fab6-0464-e9f5-dbf726",
        "sort": "newest",
        "count": 2,
        "offset": 0,
        "tag": "public"
      }
    })
    .then(response => callback(null, {statusCode: 200, body: response}))
      .catch(console.log)
}
