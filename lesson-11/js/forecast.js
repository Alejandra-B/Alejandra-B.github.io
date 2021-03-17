const five_dayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";


fetch(five_dayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //variables:
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let this_day = 0; //the current day will be on 0 index

        //this is how to find the specific information I need 
        const five_days = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); //x:object, x.dt_text:category, 18:00:00:value

        //loop through each of the forecast days
        five_days.forEach(jsObject => { // the api will loop for every day of the week 
            let day = new Date(jsObject.dt_txt); //this is the new day that is created from the api list

            document.getElementById('week_day' + (this_day + 1)).textContent = weekday[day.getDay()];
            document.getElementById('current-temp' + (this_day + 1)).textContent = jsObject.main.temp;




            /*Use a variable to store the image address which needs to be concatenated together given the API icon code value result.
            Use a variable to store the weather description.
            Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
            Set the src attribute for the <img> with the id of 'icon'.
            Set the alt attribute for the <img> for accessibility. See below:*/


            //get images from api 


            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //  concatenation
            const imagedescription = jsObject.weather[0].description; //  reference the weather array image source
            document.getElementById('imagesrc' + (this_day + 1)).setAttribute = imagesrc;
            document.getElementById('icon' + (this_day + 1)).setAttribute('src', imagesrc);
            document.getElementById('icon' + (this_day + 1)).setAttribute('alt', imagedescription);




        });

    });