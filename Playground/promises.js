var somePromise = new Promise((resolve,reject)=>{
    resolve('It worked');
    //reject('Unable to fulfill promise');
});

somePromise.then(
    (message) =>{
        console.log(message);
    },
    (errorM) =>{
        console.log(errorM);
    }
)