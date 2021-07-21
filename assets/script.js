
// function to repopulate city and state with saved data
var loadFunction = function() {
    document.getElementById("city-input").value = localStorage.getItem('city');
    document.getElementById("state-input").value = localStorage.getItem('state');
};

loadFunction();
var lat = "";
var lon = "";

// function for saving location when button is clicked
var locationButton = document.getElementById("location-btn");
locationButton.addEventListener('click', clickBtn());

function clickBtn() {
    var city = document.getElementById("city-input").value;
    var state = document.getElementById("state-input").value;
    function savePlace() {
        console.log(city, state);
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);  
    };
    savePlace();
    getLatLong(city, state);

};
// var geoLocation = (document.getElementById("city-input").value + ", " + document.getElementById("state-input").value);

    // var city = document.getElementById("city-input").value;

    // var state = document.getElementById("state-input").value;
    function getLatLong() {
        var geoKey = "sSeG8IzoZGYpxJxzrfbl21xhjdOKmvan";

        var geoCall = "http://open.mapquestapi.com/geocoding/v1/address?key=" + geoKey + "&location=" + localStorage.getItem('city') + "," + localStorage.getItem('state'); 
        
        fetch(geoCall)
        .then(response => {
                if (response.status === 200) {
                    return response.json()
                    .then(post => {
                        console.log(post.results);
                        var lat = post.results[0].locations[0].displayLatLng.lat;
                        var lon = post.results[0].locations[0].displayLatLng.lng;
                        getWeather(lat, lon);
                    });
                
                } else {
                    throw new Error('Something went wrong on api server!');
                };
        });
    };

    function getWeather(lat, lon) {
        const API_key = "3e3a8f9018bbc2c4f3ff15318e09efc6";
        var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_key;

        fetch(apiCall)
         .then(response => {
             if (response.status === 200) {
                 return response.json();
               } else {
                 throw new Error('Something went wrong on api server!');
               }
         })
     
     }
        


     

    