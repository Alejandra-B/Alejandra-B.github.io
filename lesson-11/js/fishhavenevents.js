const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Fish Haven") {
                

                //variables
                let card = document.createElement('section');
                let events = document.createElement('p');
                let events1 = document.createElement('p');
                let events2 = document.createElement('p');
                let events3 = document.createElement('p');

                // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                // It also shows the order in which everything appears.
                events.textContent = towns[i].events[0];
                events1.textContent = towns[i].events[1];
                events2.textContent = towns[i].events[2];
                events3.textContent = towns[i].events[3];


                //this is how to append the element to the card 
                card.appendChild(events);
                card.appendChild(events1);
                card.appendChild(events2);
                card.appendChild(events3);

                document.querySelector('div.cards').appendChild(card);


            }
        }

    });