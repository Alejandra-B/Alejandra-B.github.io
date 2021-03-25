const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.548264&lon=-112.191696&exclude=current&appid=96658d9a7e75c72252f06d47773c60d7";
console.log(apiURL);
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
        


        current_conditions.textContent = jsObject.weather[0].description;
        temperature.textContent = jsObject.main.temp;
        feels_like.textContent = jsObject.main.feels_like;
        humidity.textContent = jsObject.main.humidity;


    });