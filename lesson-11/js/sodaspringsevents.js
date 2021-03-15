const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Soda Springs") {
                

                //variables
                let card = document.createElement('section');
                let events = document.createElement('h4');

                // this is how to fill each one of the elements, this is what it will show on top on my image on the page.
                // It also shows the order in which everything appears.
                events.textContent = towns[i].events;


                //this is how to append the element to the card 
                card.appendChild(events);

                document.querySelector('div.cards').appendChild(card);


            }
        }

    });