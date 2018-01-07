const axios = require('axios');
const coldOrHot = require('./w/coldOrHot');

var getInfo = (geocodeURL) =>{

    axios.get(geocodeURL).then(
        (response)=>{
            if(response.data.status === 'ZERO_RESULTS'){
                throw new Error('Unable to find the address');
            }
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            console.log(response.data.results[0].formatted_address);
            var w_url = "https://api.darksky.net/forecast/f3f7f3e0c62dc298977ac61c7086867a/"+lat+","+lng+"?units=si";
            return axios.get(w_url);
        }
    ).then(
        (response)=>{
            let temperatures = {
                temperature : response.data.currently.temperature,
                feels_like : response.data.currently.apparentTemperature,
                summary : response.data.currently.summary,
                summary_for_later : response.data.daily.summary
            }
            console.log("The actual temperature is: "+ temperatures.temperature+" Celsius but it feels like: "+temperatures.feels_like+" Celsius "+ ", the summary for the week is: "+temperatures.summary_for_later);
            coldOrHot.isItHotOrCold(temperatures.feels_like)
        }
    ).catch(
        (error) =>{
            console.log(error.message);
        }
    );
}

module.exports = {getInfo};