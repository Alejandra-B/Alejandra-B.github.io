const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";

//weather box


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //these are all the variables I will need for the weather box//


        const temperature = document.querySelector('#temp');
        const feels_like = document.querySelector('#feelslike');
        const humidity = document.querySelector('#humidity');
        const current_conditions = document.querySelector("#weather");
        const speed = document.querySelector('#speed');


        current_conditions.textContent = jsObject.weather[0].description;
        temperature.textContent = jsObject.main.temp;
        feels_like.textContent = jsObject.main.feels_like;
        speed.textContent = jsObject.wind.speed;
        humidity.textContent = jsObject.main.humidity;


        
        var f = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
        
        if (temperature <= 50 && speed >= 3) {
         result= f.toFixed(1);
        } 
        else {
            result= "N/A";
        }
        document.getElementById("windchill").innerHTML = result; 

    });