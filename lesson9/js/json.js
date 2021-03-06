const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

            const towns = jsonObject['towns'];
            for (let i = 0; i < prophets.length; i++) {
                if (towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {

                    //variables
                    let card = document.createElement('section');
                    let h2 = document.createElement('h2');
                    let p = document.createElement('p');
                    let photo = document.createElement('img');
                    let yearFounded = document.createElement('year');
                    let currentPopulation = document.createElement('population');
                    let averageRainfall = document.createElement('rain');


                    // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                    // It also shows the order in which everything appears.
                    h2.textContent = towns[i].name + '' + towns[i].motto;
                    yearFounded.textContent = "Year Founded: " + '' + towns[i].yearFounded;
                    currentPopulation.textContent = "Population: " + '' + towns[i].currentPopulation;
                    averageRainfall.textContent = "Average Rain Fall: " + '' + towns[i].averageRainfall;


                    //this is how to append the element to the card and paragraph
                    card.appendChild(h2);
                    card.appendChild(p);
                    p.appendChild(yearFounded);
                    p.appendChild(currentPopulation);
                    p.appendChild(averageRainfall);
                    card.appendChild(motto);

                    //images
                    photo.setAttribute('src', towns[i].photo);
                    photo.setAttribute('alt', towns[i].name + ' ' + towns[i].order);

                    document.querySelector('div.cards').appendChild(card);
                } else {

                    document.querySelector('div.cards').appendChild(card).display = none;
                }


            });