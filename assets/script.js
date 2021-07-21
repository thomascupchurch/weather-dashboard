
// function to repopulate city and state with saved data

var cityInput = document.getElementById("city-input").value;
var stateInput = document.getElementById("state-input").value;
var descriptionBox = document.getElementById('weather-description');
var loadFunction = function() {
    // document.getElementById("city-input").value 
    cityInput = localStorage.getItem('city');
    // document.getElementById("state-input").value 
    stateInput = localStorage.getItem('state');
};

// loadFunction();

let lat = "";
let lon = "";
let city = "";
let state = "";
const geoKey = "sSeG8IzoZGYpxJxzrfbl21xhjdOKmvan";
// let geoCall = "";


// function for saving location when button is clicked
var locationButton = document.getElementById("location-btn");
locationButton.addEventListener('click', clickBtn());
    

function clickBtn(city, state) {
    var city = document.getElementById("city-input").value;
    var state = document.getElementById("state-input").value;
    savePlace();
    getLatLong(city, state);
    getWeather(lat, lon);
};

function savePlace(city, state) {
    console.log(city, state);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);  
};
// var geoLocation = (document.getElementById("city-input").value + ", " + document.getElementById("state-input").value);

    // var city = document.getElementById("city-input").value;

    // var state = document.getElementById("state-input").value;
    
    
 // get lat and long from user inputs of city and state  
function getLatLong(city, state) {
    var geoCall = "http://open.mapquestapi.com/geocoding/v1/address?key=" + geoKey + "&location=" + city + "," + state; 
        fetch(geoCall)
        .then(response => {
                if (response.status === 200) {
                    return response.json()
                    .then(post => {
                        console.log(post.results);
                        var lat = post.results[0].locations[0].displayLatLng.lat;
                        var lon = post.results[0].locations[0].displayLatLng.lng;
                        console.log("lat=" + lat + "," + "long=" + lon);
                        getWeather(lat, lon);
                    });
                
                } else {
                    throw new Error('Something went wrong on api server!');
                };
        });
}

    // get weather using lat and long from geoCall
    function getWeather(lat, lon) {
        const API_key = "3e3a8f9018bbc2c4f3ff15318e09efc6";
        var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_key;
        fetch(apiCall)
         .then(response => {
             if (response.status === 200) {
                 return response.json()
                 .then(post => {
                     console.log(post.current.weather[0].description);
                     var weatherDescription = toString(post.current.weather[0].description.value);
                     
                        document.getElementById("weather-description").innerText = weatherDescription;
                 });
               } else {
                 throw new Error('Something went wrong on api server!');
               };
         }
         )};
         


     


    