const five_dayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";


fetch(five_dayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //variables:
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let this_day = 0;

        //this is how to find the specific information I need 
        const five_days = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); //x:object, x.dt_text:category, 18:00:00:value
        
        //loop through each of the forecast days
        five_days.forEach(jsObject => {
            let day = new Date(jsObject.dt_txt);

           document.getElementById('#week_day'+ this_day).textContent = weekday[day.getDay()];
            document.getElementById('#temp' + this_day).textContent = (jsObject.main.temp).toFixed(2);

            //get images from api and display on the Preston page:


            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon +'.png'; //  concatenation
            const d = jsObject.weather[0].d; //  reference the weather array image source
            document.getElementById('imagesrc'+ this_day ).setAttribute = imagesrc;
            document.getElementById('icon' + this_day).setAttribute('src', imagesrc);
            document.getElementById('icon' + this_day ).setAttribute('alt', d);




        });

    });