// async function myFunc() {
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(() => resolve('Hello'), 2000);
//     });

//     const error = false;

//     if(!error){
//         const res = await promise; // Wait until promise is resolve
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong'));
//     }
    
// }

// myFunc()
// .then(res => console.log(res));

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    // only process once it is resolved
    const data = await response.json();
    // only proceed once the 2nd promise is resolve
    return data;
}
getUsers().then(data => console.log(data));
