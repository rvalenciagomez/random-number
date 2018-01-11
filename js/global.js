var maxNumber = 0;
            
function randomNumber() {

    maxNumber = document.getElementById("max").value;

    var milliseconds = flip();

    var rndNumber = milliseconds % maxNumber;
    
    document.getElementById("rndNum").innerHTML 
        = '<p class="rnd-result" >Your Random number is: ' + rndNumber +'</p>';

    return rndNumber;
}

function flip() {
    var milliseconds = new Date().getMilliseconds() * new Date().getMilliseconds();
    console.log('random milliseconds complete: ' + milliseconds);

    return milliseconds;
}