
// function to repopulate city and state with saved data
var loadFunction = function() {
    document.getElementById("city-input").value = localStorage.getItem('city');
    document.getElementById("state-input").value = localStorage.getItem('state');
};

loadFunction();


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
    }
    savePlace();
};


// var geoLocation = (document.getElementById("city-input").value + ", " + document.getElementById("state-input").value);

    var city = document.getElementById("city-input").value;

    var state = document.getElementById("state-input").value;

    var geoKey = "sSeG8IzoZGYpxJxzrfbl21xhjdOKmvan";

    var geoCall = "http://open.mapquestapi.com/geocoding/v1/address?key=" + geoKey + "&location=" + localStorage.getItem('city') + "," + localStorage.getItem('state'); 

    function getLatLong() {
        // fetch(geoCall)
        fetch("http://open.mapquestapi.com/geocoding/v1/address?key=" + geoKey + "&location=" + localStorage.getItem('city') + "," + localStorage.getItem('state'))
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                    
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            }); 
            var latitude = response.results[0].locations[0].displayLatLng.lat;
            var longitude = results[0].locations[0].displayLatLng.lng;
            console.log(latitude, longitude);           
        }

    getLatLong();






// var getWeather = function() {
//    fetch(apiCall)
//     .then(response => {
//         if (response.status === 200) {
//             return response.json();
//           } else {
//             throw new Error('Something went wrong on api server!');
//           }
//     })
//     console.log(response.json());

// }

// getWeather();



// function to submit city, state data to to api and return latitude and longitude

let lat = "35";

let lon = "90";

let part = "";

const API_key = "3e3a8f9018bbc2c4f3ff15318e09efc6";

var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + part + "&appid=" + API_key;


// var geoLocation = (document.getElementById("city-input").value + ", " + document.getElementById("state-input").value);

// const geoKey = "sSeG8IzoZGYpxJxzrfbl21xhjdOKmvan"

// var geoCall = ("http://open.mapquestapi.com/geocoding/v1/address?key=" + geoKey + "&location=" + localStorage.getItem('city') + "," + localStorage.getItem('state')); 

// var locationRequest;
    // document.getElementById("location-btn").addEventListener('click', makeLocationRequest);
    
    // var locationInput = document.getElementById()
    // city + ", " + state;

    // locationInput.addEventListener('click', getPlaces()) 
    
    // function getPlaces() {
        
    //         console.log("text entered");
    //         // localStorage.getItem(key, value);
            
    //     };


    
    
    
//     let userLocation = document.getElementById("location-input").value;


//     function saveLocation() {
//         if (locationInput.value) {
//     localStorage.setItem('location', 'locationInput.value');
//     console.log(locationInput.value);
//         } else {
//             alert("please enter a location");
//         }
// };

    

// const request = new Request(apiCall);







// function fetchLocation() {
//     var CLIENT_ID = 'J2MRFS4ADGKCYKV2ODB2YXAS5RXML0JEXPXGCQL5R42MDUNW';

//     var CLIENT_SECRET = 'CREYTXU1UFNE1L1C3NAE3MH5RHEBXE0RCL1PYJF4ILL5RHZR';

//     var city = "memphis";
    
//     // document.getElementById("city-input").textContent.toLowerCase;

// $.ajax({
//     dataType: "json",
//     url: ("https://api.foursquare.com/v2/venues/explore?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=20180323&limit=1&ll=40.7243,-74.0018&query=" + city),
//     data: {},
//     success: function( data ) {
//       // Code for handling API response
//       console.log(data);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       // Code for handling errors
//     }
//   });
// }


// function getUserLocation() {
//     $.ajax({
//         datatype: "json",
//         url: "https://freegeoip.app/json/",
//         data: {},
//         success: function( data ) {
//             console.log(data);
//         },
//         error: function() {
//             console.log("error");
//         }
//     })
    

// }


// https://www.metaweather.com/api/location/44418/ 


// httpRequest.onreadystatechange = function(){
    // Process the server response here.
    // if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //     // Everything is good, the response was received.
    // } else {
    //     // Not ready yet.
    // }
    
// };
// httpRequest.open('GET', 'http://www.example.org/some.file', true);
// httpRequest.send();


// httpRequest.responseText – returns the server response as a string of text
// httpRequest.responseXML – returns the response as an XMLDocument object you can traverse with JavaScript DOM functions

function getLatLong() {
    // var locationRequest;
    // document.getElementById("location-btn").addEventListener('click', makeLocationRequest);
    // var locationInput = document.getElementById("location-input").addEventListener('blur', saveLocation());
    

    // function saveLocation() {
    //     localStorage.setItem('city, ST', locationInput.textContent.stringify());
    // }


    function makeLocationRequest() {
      locationRequest = new XMLHttpRequest();
  
      if (!locationRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      locationRequest.onreadystatechange = alertContents;
      locationRequest.open('GET', geoCall);
      locationRequest.send();
    }
  
    function alertContents() {
      if (locationRequest.readyState === XMLHttpRequest.DONE) {
        if (locationRequest.status === 200) {
          alert(locationRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  };

// getLatLong();

function getWeather() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);
  
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
  
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', apiCall);
      httpRequest.send();
    }
  
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  };

  // getWeather();