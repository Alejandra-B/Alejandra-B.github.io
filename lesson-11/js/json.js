const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {
                //Sierra helped me with this part of the code (line 13) but I added the extra = because === is considered faster than ==.
                // I had the same idea, but I had placed it before my for loop, so it wasn't working at all until I placed it inside the for loop.
                // In the lab on Wed. the idea of using a if statement was brought up as well. 
                //We worked with if statements in CIT 160, so I was familiar with it. 
                 
                //variables
                let card = document.createElement('section');
                let motto = document.createElement('h4');
                let p = document.createElement('p');
                let name = document.createElement('h2')
                let photo = document.createElement('img');
                let yearFounded = document.createElement('year');
                let currentPopulation = document.createElement('population');
                let averageRainfall = document.createElement('rain');


                // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                // It also shows the order in which everything appears.
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = "Year Founded: " + '' + towns[i].yearFounded;
                currentPopulation.textContent = "Population: " + '' + towns[i].currentPopulation;
                averageRainfall.textContent = "Average Rain Fall: " + '' + towns[i].averageRainfall;


                //this is how to append the element to the card and paragraph
                p.appendChild(name);
                p.appendChild(motto);
                card.appendChild(p);
                p.appendChild(yearFounded);
                p.appendChild(currentPopulation);
                p.appendChild(averageRainfall);
                card.appendChild(photo);



                //images
                photo.setAttribute('src', 'images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name + ' ' + towns[i].order);

                document.querySelector('div.cards').appendChild(card);

            }
        }

    });