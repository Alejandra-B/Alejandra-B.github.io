const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.548264&lon=-112.191696&exclude=hourly,minutely&units=imperial&appid=7af5ae2353444deccd098462eae9a156";
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
        temperature.textContent = jsObject.current.temp;
        feels_like.textContent = jsObject.current.feels_like;
        humidity.textContent = jsObject.current.humidity;


    });

    