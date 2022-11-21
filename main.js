const axios = require('axios');

const url = "http://api.office.rest";

axios.get(url)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err.message);
  })
  ;


console.log("*** End of our Code ** ");