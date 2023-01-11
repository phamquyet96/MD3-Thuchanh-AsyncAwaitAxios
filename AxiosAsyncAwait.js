const axios = require("axios");
async function getJSONAsync(){
    try{
        let json=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        return json.data;
    }
    catch(error) {
        throw new Error("Cho co thoi")
    }
}
getJSONAsync().then(result=>console.log(result))
              .catch(error=>console.log(error))