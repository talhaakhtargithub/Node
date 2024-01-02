let a =30;
let b=0;




let waitData=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

waitData.then((b)=>{
    console.log(a+b)
})




