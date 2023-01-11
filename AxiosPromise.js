
const axios = require("axios");
function getJSONAPIs(){
    return new Promise(function (resolve,reject){
        axios.get("http://jsonplaceholder.typicode.com/posts/1")
            .then(function (json){
                resolve(json.data);
            })
            .catch(()=>{
                reject(new Error("Cho co thoi") );
            })
    })
}
getJSONAPIs().then(result=>console.log(result))
             .catch(error=>console.log(error))