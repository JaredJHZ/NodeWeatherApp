
const request = require('request');


getGeolocation = (address,callback) =>{
    var address = encodeURIComponent(address);
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
                callback('unable to connect with google servers');
            }
            if(body.status==='ZERO_RESULTS')
            {
                callback('unable to find address');
            }else if(body.status === 'OK'){
                latlng.lat = body.results[0].geometry.location.lat;
                latlng.lng = body.results[0].geometry.location.lng;
                latlng.address = body.results[0].formatted_address;
                callback(undefined,latlng);
            }
        })
}

module.exports = {getGeolocation};