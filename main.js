const axios = require("axios");

console.log("\n***Start of my Code ***");

const url = "https://api.kanye.rest/";

axios.get(url)
  .then(result => {
    console.log("1.", result.data.quote);
    return axios.get(url);
  })
  .then(result => {
    console.log("2.", result.data.quote);
    return axios.get(url);
  })
  .then(result => {
    console.log("3.", result.data.quote);
  })
  .catch(e => console.log(e.message));

console.log("***End of my Code ***\n");
