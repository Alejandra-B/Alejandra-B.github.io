const requestURL = 'https://raw.githubusercontent.com/Alejandra-B/Alejandra-B.github.io/master/lesson-12-final-project/file.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const businesses = jsonObject['businesses'];

        for (let i = 0; i < businesses.length; i++) {
            
                //variables
                let card = document.createElement('section');
                let p = document.createElement('p');
                let name = document.createElement('h2'); 
                let address= document.createElement('address');
                let city = document.createElement('city');
                let website = document.createElement('website');


                // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                // It also shows the order in which everything appears.
                name.textContent = businesses[i].name;
                address.textContent = "Address:" + '' + businesses[i].address;
                city.textContent = "City:" + '' + businesses[i].city;
                website.textContent = "Website:" + '' + businesses[i].website;


                //this is how to append the element to the card and paragraph
                card.appendChild(name);
                p.appendChild(address);
                p.appendChild(city);
                p.appendChild(website);
                card.appendChild(p);
                

                document.querySelector('div.cards').appendChild(card);

            }
        }

    });