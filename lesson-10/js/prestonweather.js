const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";




fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //these are all the variables I will need for the weather box//
        const temperature = document.querySelector('#temp');
        const humidity = document.querySelector('#humidity');
        const weather = document.querySelector("#weather");
        const speed = document.querySelector('speed');
        const windchill = document.querySelector('windchill');
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });