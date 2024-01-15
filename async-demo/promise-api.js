// // const p=Promise.resolve({id:1})
// const p=Promise.reject(new Error('message'))
// p.then(result=>console.log(result))
// .catch(err=> console.log(err.message))


const p=new Promise((resolve)=>{
   setTimeout(() => {
    console.log('Async Oper');
    resolve(1)
   }, 2000);
} )
const p2=new Promise((resolve)=>{
   setTimeout(() => {
    console.log('Async Oper done Face');
    resolve(3)
   }, 3000);
} )


Promise.race([p,p2])
.then(result => console.log(result))
.catch(err=> console.log(err))