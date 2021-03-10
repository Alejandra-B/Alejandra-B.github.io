var temp = parseFloat(document.querySelector("#temp").textContent);
var speed = parseFloat(document.querySelector("#speed").textContent);
var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

if (temp <= 50 && speed > 3) {
    F= f.toFixed(1);
} 
else {
    F= "N/A";
}
document.getElementById("windchill").innerHTML = F