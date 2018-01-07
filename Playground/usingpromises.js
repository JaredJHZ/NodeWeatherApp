const request = require('request');

var geoLocation = (Address) =>{
    return new Promise((resolve,reject)=>{
        var address = encodeURIComponent(Address);
        var latlng = {
        lat : null,
        lng : null,
        address: null
         };  
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+address,
            json: true
        },(error,response,body)=>{
            if(error)
            {
                reject('unable to connect with google servers');
            }
            if(body.status==='ZERO_RESULTS')
            {
                reject('unable to find address');
            }else if(body.status === 'OK'){
                latlng.lat = body.results[0].geometry.location.lat;
                latlng.lng = body.results[0].geometry.location.lng;
                latlng.address = body.results[0].formatted_address;
                resolve(latlng);
            }
        })
    });

};

geoLocation('96558').then(
    (location)=>{
        console.log(JSON.stringify(location,undefined,2));
},
    (error)=>{
        console.log(error);
    }
);