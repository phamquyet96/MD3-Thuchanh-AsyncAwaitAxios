const axios=require("axios")

function getAPIs(){
    return new Promise((resolve, reject)=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(function (json){
                resolve(json.data)
            })
            .catch((error)=>{
                console.log(new Error("Thich thi cho"))
            })
    })
}
getAPIs()
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
