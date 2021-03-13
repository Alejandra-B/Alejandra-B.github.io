const five_dayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";


fetch(five_dayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //variables:
        const w = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
        let this_day = 0;

        //this is how to find the specific information I need 
        const five_days = jsObject.list.filter(x => x.dt_text.includes('18:00:00')); //x:object, x.dt_text:category, 18:00:00:value
        
        //loop through each of the forecast days
        five_days.forEach(x => {
            let day = new Date([x].dt_txt);

            document.getElementById('#week_day'+ (this_day + 1)).textContent = w[day.getDay()];
            document.getElementById('#temp' + (this_day + 1)).textContent = (jsObject.main.temp).toFixed(2);

            //get images from api and display on the Preston page:


            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon +'.png'; //  concatenation
            const desc = jsObject.weather[0].description; //  reference the weather array image source
            document.getElementById('imagesrc'+ (this_day + 1)).textContent = imagesrc;
            document.getElementById('icon' + (this_day + 1)).setAttribute('src', imagesrc);
            document.getElementById('icon' + (this_day + 1)).setAttribute('alt', desc);




        });

    });