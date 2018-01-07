
var getUser = (id,callback) =>{
    var user = {
        id : id,
        name : 'Jared'
    };

    setTimeout(()=>{
        var error = 'error, ya entendí las callbacks';
        callback(user,error);
    },3000);
};

getUser(15,(user,r)=>{
    console.log(user);
    console.log(r);
});