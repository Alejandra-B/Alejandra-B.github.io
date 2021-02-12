function windChill() {
    var temp = parseFloat(document.getElementById("#temp").value);
    var speed = parseFloat(document.getElementById("#speed").value);
    var windchill= 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    var result = windChill(temp, speed); 

    document.getElementById("#windchill").innerHTML= result + "°F"

}


