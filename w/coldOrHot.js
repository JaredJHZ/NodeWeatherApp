var isItHotOrCold = (temp) =>{
    if(temp > 28){
        console.log("Is hot outside, you should stay fresh");
    }else if(temp > 20){
        console.log("Oh what a time to be alive don´t you think?")
    }else if(temp > 10){
        console.log("Is cold outside, you should use a sweater");
    }else{
        console.log("Damn is cold, what a shame");
    }
}

module.exports = {isItHotOrCold};