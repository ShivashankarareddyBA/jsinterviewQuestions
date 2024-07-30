const p1 = new Promise((reslove, reject) => {
  setTimeout(() => reslove("p1 sucess"), 3000);
});
const p2 = new Promise((reslove, reject) => {
  setTimeout(() => reject("p2 reject"), 1000);
});
const p3 = new Promise((reslove, reject) => {
  setTimeout(() => reslove("p3 sucess"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//  promise.allsettle
//   const p1 = new Promise((reslove, reject) =>{
//     setTimeout(()=>reject("p1 reject"), 1000);
// });
// const p2 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p2 rejected"),3000);
// });
// const p3 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p3 reject"),2000);
// });

// console.log("hey shiva");

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
    
// });

// //promise.race
// const p1 = new Promise((reslove, reject) =>{
//     setTimeout(()=>reject("p1 reject"), 1000);
// });
// const p2 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p2 rejected"),3000);
// });
// const p3 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p3 reject"),2000);
// });

// console.log("hey shiva");

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
    
// });

// //promise.any
// const p1 = new Promise((reslove, reject) =>{
//     setTimeout(()=>reject("p1 reject"), 1000);
// });
// const p2 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p2 rejected"),3000);
// });
// const p3 = new Promise((reslove, reject)=>{
//     setTimeout(()=>reject("p3 reject"),2000);
// });

// console.log("hey shiva");

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
    
// });









