// Use Async/Await
async function division(a,b){
    if(b !=0){
        return a/b;
    }
    return new Error("Khong thuc hien duoc phep chia cho 0");
}

async function f(){
    try{
        let result= await division(2,0);
        console.log(result);
    }
    catch (error){
        console.log(error)
    }
}
f();


// Use promise

// let promise=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         if(b!=0){
//             resolve(a/b);
//         }else{
//             reject(new Error("Khong thuc hien duoc phep chia cho 0"))
//         }
//     })
// }
// promise(2,0)
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

