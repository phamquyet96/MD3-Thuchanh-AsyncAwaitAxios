const axios=require("axios");

async function getAllUser(){
    try{
        let json=await axios.get("https://jsonplaceholder.typicode.com/users\n" +
            "\n");
        return json.data;
    }
    catch (error){
        console.log(new Error("Minh thich thoi"));
    }
}
getAllUser()
.then((result)=>console.log(result))
.catch(error=>console.log(error))