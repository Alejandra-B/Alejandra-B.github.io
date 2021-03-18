const five_dayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";


fetch(five_dayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //variables:
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let this_day = 0; //the current day will be on 0 index
        let five_days = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); //x:object, x.dt_text:category, 18:00:00:value
        console.log(five_days); 
        //loop through each of the forecast days
        five_days.forEach(jsObject => { // the api will loop for every day of the week 
            let day = new Date(jsObject.dt_txt); //this is the new day that is created from the api list
            let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon +'.png';
            let imagedescription = jsObject.weather[0].description; //  reference the weather array image source description
            let currentday= 'week_day'+ (this_day+1); 
           


            console.log(weekday[day.getDay()]); 
            console.log('current-temp'+ (this_day + 1) ); 
            console.log('icon' + (this_day + 1)); 
            document.getElementById(currentday).textContent = weekday[day.getDay()];
            document.getElementById('current-temp'+ this_day + 1).textContent = jsObject.main.temp;
            document.getElementById('icon' + (this_day + 1)).setAttribute('src', imagesrc);
            document.getElementById('icon' + (this_day + 1)).setAttribute('alt', imagedescription);

            this_day++; //increments 1


        });

    });


    