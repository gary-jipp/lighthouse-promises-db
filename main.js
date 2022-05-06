const axios = require("axios");

console.log("\n***Start of my Code ***");

// const url = "https://api.kanye.rest";
const url = "https://officeapi.dev/api/quotes/random";
const promise = axios.get(url);

promise
  .then(result => {
    console.log(result.data.quote);
    console.log(result.data.data.content);
  })
  .catch(e => console.log(e.message));

console.log("***End of my Code ***\n");
