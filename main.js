const axios = require("axios");

console.log("\n***Start of my Code ***");

const url = "http://api.kanye.rest";
// const url = "https://officeapi.dev/api/quotes/random";
// const url = "http://api.office.rest";
const promise = axios.get(url);

promise
  .then(result => {
    console.log(result.data.quote);
  })
  .catch(e => console.log(e.message));

console.log("***End of my Code ***\n");
