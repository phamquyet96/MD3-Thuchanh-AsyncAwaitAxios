// Use Async/Await
async function onMyBirthday(isKayoSick){
    if(!isKayoSick){
        return 2;
    }
    return new Error("There is no cake and I am sad");
}

async function useAsyncAwait(){
    try{
        let result= await onMyBirthday(false);
        console.log(`I have ${result} cakes and I am happy`);
    }
    catch (error){
        console.log(error);
    }
    finally {
        console.log("We still have a party ")
    }
}

useAsyncAwait();


// Use Promise

// let onMyBirthday=(isASick)=>{
//     return new Promise((resolve, reject)=>{
//         if(!isASick){
//             resolve(2);
//         }else{
//             reject(new Error("There is no cake and I am sad"));
//         }
//     })
// }
// onMyBirthday(false)
//     .then(result=>console.log(`I have ${result} cakes and I am happy`))
//     .catch(error=>console.log(error))
//     .finally(()=>console.log("We still have party"))