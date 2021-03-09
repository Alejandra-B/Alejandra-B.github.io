const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid={96658d9a7e75c72252f06d47773c60d7}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
