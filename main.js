const axios = require("axios");

console.log("\n***Start of my Code ***");

const url = "https://api.kanye.rest/";

const promise1 = axios.get(url);
const promise2 = axios.get(url);
const promise3 = axios.get(url);

Promise.all([promise1, promise2, promise3])
  .then(all => {
    console.log(all[0].data.quote);
    console.log(all[1].data.quote);
    console.log(all[2].data.quote);
    return axios.get(url);
  })
  .catch(e => console.log(e.message));

console.log("***End of my Code ***\n");
