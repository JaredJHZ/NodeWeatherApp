const request = require('request');
const yargs = require('yargs');
const geocode = require('./geolocation/geo');
const weather = require('./w/weather');

const argv = yargs
    .options({
        a: {
            demand : true,
            alias : 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.getGeolocation(argv.a,(error,results)=>{
    if(error)
    {
        console.log(error);
    }else{
        console.log(results.address);
            weather.getWeather(results.lat,results.lng,(error,temp)=>{
                if(error)
                {
                    console.log('Error');
                }else{
                    if(temp)
                    {
                        console.log(JSON.stringify(temp,undefined,2));
                    }
                }
            });

    }
   
});
