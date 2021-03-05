const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) { //for loop
            //these are the variables needed
            let card = document.createElement('section'); //this was the example
            let h2 = document.createElement('h2'); //this was the example
            // I created these ones:
            let p = document.createElement('p'); //paragraphs 
            let image = document.createElement('img'); //images
            let birthDate = document.createElement('date'); //birth date
            let birthPlace = document.createElement('place'); //birth place
           


            // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
            // It also shows the order in which everything appears.
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; //this is the example text
            birthDate.textContent = "Date of Birth: " + prophets[i].birthdate; // I created the following ones
            birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
            
            
            //this is how to append the element to the card and paragraph
            card.appendChild(h2);
            card.appendChild(p);
            p.appendChild(birthDate);//here these ones are connected to the paragraphs instead than to the card. 
            p.appendChild(birthPlace);
            card.appendChild(image);

            //images
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + prophets[i].lastname + ' ' + prophets[i].order); 

            document.querySelector('div.cards').appendChild(card);
        }

    });