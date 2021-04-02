 

const five_dayapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.548264&lon=-112.191696&exclude=hourly,daily,minutely&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";
console.log(five_dayapiURL);

fetch(five_dayapiURL)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);

    //variables:
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let this_day = 0; //the current day will be on 0 index
    let five_days = jsObject.current.temp; 
    console.log(five_days); 
    //loop through each of the forecast days
    five_days(jsObject => { // the api will loop for every day of the week 
        let day = new Date(jsObject.current); //this is the new day that is created from the api list
        let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon +'.png';
        let imagedescription = jsObject.weather[0].description; //  reference the weather array image source description
        let currentday= 'week_day'+ (this_day+1); 
       


        //console.log(weekday[day.getDay()]); 
        //console.log('current-temp'+ (this_day + 1) ); 
        //console.log('icon' + (this_day + 1)); 
        document.getElementById(currentday).textContent = weekday[day.getDay()];
        document.getElementById('current-temp'+ (this_day + 1)).textContent = jsObject.current.temp;
        document.getElementById('icon' + (this_day + 1)).setAttribute('src', imagesrc);
        document.getElementById('icon' + (this_day + 1)).setAttribute('alt', imagedescription);

        this_day++; //increments 1


    });

});