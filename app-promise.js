const request = require('request');
const yargs = require('yargs');
const axiosP = require('./axiosP');
const fs = require('fs');

const argv = yargs
    .options({
        a: {
            demand : false,
            alias : 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .command("addDefault","add a default location",{
        city: {
            describe: "The name of the city you want to use as default",
            demand: true,
            alias: 'c'
        }
    })
    .help()
    .alias('help','h')
    .argv;

    if(process.argv[2] === 'addDefault')
    {
        console.log("ok");
        let defaultCity = {
            city : argv.city
        }
        fs.writeFile("default.json",JSON.stringify(defaultCity),
        (error)=>{
            if(error){
                console.log('Error writting the file');
            }else{
                console.log("Default city changed to: "+argv.city);
            }
        }
    
    )
    }

    if(argv.address === undefined)
    {
        fs.readFile("default.json",
        (error,data)=>{
            if(error){
                console.log("Error there is no city implemented as default run --help for more info");
            }else{
                address = JSON.parse(data.toString('utf8'));
                city = address.city;
                a = encodeURIComponent(JSON.stringify(city));
                var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+a;
                axiosP.getInfo(geocodeURL);
            }
        }
    );}
    else{
        var a = encodeURIComponent(argv.address);   
        var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+a;
        axiosP.getInfo(geocodeURL); 
    }