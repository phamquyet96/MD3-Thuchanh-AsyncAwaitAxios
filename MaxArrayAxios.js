// Use Promise
// function MaxArray(arr){
//     return new Promise((resolve, reject)=>{
//         if(arr instanceof Array){
//             let max=arr[0];
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i]>max){
//                     max=arr[i];
//                 }
//             }
//             resolve(max);
//         }else{
//             reject(new Error("Khong phai mang"));
//         }
//     })
// }
// MaxArray(1)
// .then(result=>console.log(result))
// .catch(error=>console.log(error))


//Use Async/Await
async function maxArray(arr){
        if(arr instanceof Array) {
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
         return new Error("Khong phai mang");
}
async function maxAsync(){
  try{
      let result=await maxArray(1);
      console.log(result);
  }
  catch (error){
      console.log(error)
  }
}
maxAsync();
