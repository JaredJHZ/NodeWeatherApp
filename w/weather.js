const request = require('request');

var getWeather = (lat,lng,callback) =>{

request({
    url:  "https://api.darksky.net/forecast/f3f7f3e0c62dc298977ac61c7086867a/"+lat+","+lng+"?units=si",
    json: true
},(error,response,body)=>{
    if(error){
        callback(error);
    }
   if(body.currently){
       var temperatures = {
            temperature : body.currently.temperature,
            feelsLike: body.currently.apparentTemperature
       }
       callback(undefined,temperatures);
    
   }else{
       callback('Error finding the location');
   }
});
};

module.exports = {getWeather};