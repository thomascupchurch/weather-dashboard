let lat = "33";

let lon = "33";

let part = "";

const API_key = "3e3a8f9018bbc2c4f3ff15318e09efc6";

var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + part + "&appid=" + API_key;

const request = new Request(apiCall);


var getWeather = function() {
   fetch(apiCall)
    .then(response => {
        if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }
    })
    console.log(response.json());

}

getWeather();




var fetchLocation = function() {
    var CLIENT_ID = 'J2MRFS4ADGKCYKV2ODB2YXAS5RXML0JEXPXGCQL5R42MDUNW';

    var CLIENT_SECRET = 'CREYTXU1UFNE1L1C3NAE3MH5RHEBXE0RCL1PYJF4ILL5RHZR';

    var city = document.getElementById("city-input").textContent.toLowerCase;

$.ajax({
    dataType: "json",
    url: ("https://api.foursquare.com/v2/venues/explore?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=20180323&limit=1&ll=40.7243,-74.0018&query=" + city),
    data: {},
    success: function( data ) {
      // Code for handling API response
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Code for handling errors
    }
  });
}