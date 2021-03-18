const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Preston") {
                

                //variables
                let card = document.createElement('section');
                let events = document.createElement('p');
                let events1 = document.createElement('p');
                let events2 = document.createElement('p');

                // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                // It also shows the order in which everything appears.
                events.textContent = towns[i].events[0];
                events1.textContent = towns[i].events[1];
                events2.textContent = towns[i].events[2];

                //this is how to append the element to the card 
                card.appendChild(events);
                card.appendChild(events1);
                card.appendChild(events2);

                document.querySelector('div.cards').appendChild(card);


            }
        }

    });