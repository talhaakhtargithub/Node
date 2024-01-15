function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                id:1,
                name:"Talha Akhtar",
                isGold:true,
                email:"talhaakhtarkpr1@gmail.com"

            })
        }, 2000);
    })
    
}



function getMovies(movies) {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve(['movie1','movie2'])
       }, 2000);
    })
}


function sendEmail(email,movies ) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })
    
}


async function dispCommit(params) {
    try{
      const customer = await getCustomer(1);
      console.log('Customer ',customer);
      if(customer.isGold){
        const movies = await getMovies();
        console.log('Top movies',movies);
        const email = await sendEmail(customer.email,movies)
  
        console.log('Email Send...............')
      }
    
    }
    catch(err){
      console.log(err);
  
    }
  
  }
  
  dispCommit()