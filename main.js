const axios = require("axios");

console.log("\n***Start of my Code ***");

// const url = "https://api.kanye.rest";
// const url = "https://officeapi.dev/api/quotes/random";
const url = "http://api.office.rest/character";
const promise = axios.get(url);

promise
  .then(result => {
    console.log(result.data);
  })
  .catch(e => console.log(e.message));

console.log("***End of my Code ***\n");
