
// function to repopulate city and state with saved data
document.getElementById('date').textContent = Date();
var cityInput = document.getElementById("city-input").value;
var stateInput = document.getElementById("state-input").value;
var descriptionBox = document.getElementById('weather-description');
var currentCard = document.getElementById('current-card');

var loadFunction = function() {
    // document.getElementById("city-input").value 
    cityInput.value = localStorage.getItem('city');
    // document.getElementById("state-input").value 
    stateInput.value = localStorage.getItem('state');
};

loadFunction();

let lat = "";
let lon = "";
let city = "";
let state = "";
const geoKey = "sSeG8IzoZGYpxJxzrfbl21xhjdOKmvan";
// let geoCall = "";


// function for saving location when button is clicked
var locationButton = document.getElementById("location-btn");
locationButton.addEventListener('click', clickBtn);
    

function clickBtn() {
    var city = document.getElementById("city-input").value;
    var state = document.getElementById("state-input").value;
    savePlace(city, state);
    getLatLong(city, state);
    // .then(response => {
    //     console.log(response);
    //     getWeather(response.lat, response.lon)
    // });
    // city = city.toUppercase;
    // state = state.toUppercase;
    document.getElementById("location").textContent = city + ", " + state;
};

function savePlace(city, state) {
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
        var currentCard = document.getElementById('current-card');
        console.log(lat + " " + lon);
        const API_key = "3e3a8f9018bbc2c4f3ff15318e09efc6";
        var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" +
        "&appid=" + API_key;
        fetch(apiCall)
         .then(response => {
            // console.log(response);
                 return response.json()
                 .then(post => {
                     console.log(post.current.weather[0]);
                     document.getElementById('current-conditions').textContent = post.current.weather[0].description;
                     document.getElementById('current-temp').textContent = Math.round(post.current.temp);
                     document.getElementById('uv-index-now').textContent = "UV index of " + post.current.uvi;
                     document.getElementById('wind-speed-now').textContent = "wind speed of " + post.current.wind_speed;
                     
                    
                        if (post.current.weather[0].description === 'clear sky') {
                            var clearSkiesUrl = "assets/pictures/clear.png";
                            $("#currentPic").css("background-image", ("url=" + clearSkiesUrl));
                            $("#currentPic").attr("src", clearSkiesUrl);
                        } else if (post.current.weather[0].description === 'Rain') {
                            var rainUrl = "assets/pictures/rain.png";
                            $("#currentPic").css("background-image", ("url=" + rainUrl));
                            $("#currentPic").attr("src", rainUrl);
                        } else if (post.current.weather[0].description === 'haze') {
                            var hazeUrl = "assets/pictures/fog.png";
                            $("#currentPic").css("background-image", ("url=" + hazeUrl));
                            $("#currentPic").attr("src", hazeUrl);
                        } else if (post.current.weather[0].description === 'few clouds') {
                            var fewCloudsUrl = "assets/pictures/partly-cloudy.png";
                            $("#currentPic").css("background-image", ("url=" + fewCloudsUrl));
                            $("#currentPic").attr("src", fewCloudsUrl);
                        } else if (post.current.weather[0].description === 'overcast clouds') {
                            var overcastCloudsUrl = "assets/pictures/fog.png";
                            $("#currentPic").css("background-image", ("url=" + overcastCloudsUrl));
                            $("#currentPic").attr("src", overcastCloudsUrl);
                        } else if (post.current.weather[0].description === 'overcast clouds') {
                            var overcastCloudsUrl = "assets/pictures/fog.png";
                            $("#currentPic").css("background-image", ("url=" + overcastCloudsUrl));
                            $("#currentPic").attr("src", overcastCloudsUrl);
                        } else if (post.current.weather[0].description === 'light rain') {
                            var lightRainUrl = "assets/pictures/rain.png";
                            $("#currentPic").css("background-image", ("url=" + lightRainUrl));
                            $("#currentPic").attr("src", lightRainUrl);
                        } else if (post.current.weather[0].description === 'scattered clouds') {
                            var scatteredCloudsUrl = "assets/pictures/partly-cloudy.png";
                            $("#currentPic").css("background-image", ("url=" + scatteredCloudsUrl));
                            $("#currentPic").attr("src", scatteredCloudsUrl);
                        }
                  
                    //  let weatherDescription = post.current.weather[0].description.value;
                        // descriptionBox.textContent = weatherDescription;
                        // console.log(weatherDescription);

                        // general daytime temp forecast for each day
                    document.getElementById('day-1').textContent = Math.round(post.daily[0].temp.day);
                    document.getElementById('day-2').textContent = Math.round(post.daily[1].temp.day);
                    document.getElementById('day-3').textContent = Math.round(post.daily[2].temp.day);
                    document.getElementById('day-4').textContent = Math.round(post.daily[3].temp.day);
                    document.getElementById('day-5').textContent = Math.round(post.daily[4].temp.day);

                        // expected conditions by day
                    document.getElementById('day-1-conditions').textContent = post.daily[0].weather[0].main;
                    document.getElementById('day-2-conditions').textContent = post.daily[1].weather[0].main;
                    document.getElementById('day-3-conditions').textContent = post.daily[2].weather[0].main;
                    document.getElementById('day-4-conditions').textContent = post.daily[3].weather[0].main;
                    document.getElementById('day-5-conditions').textContent = post.daily[4].weather[0].main;

                        // humidity forecast by day
                    document.getElementById('humidity-day-1').textContent = post.daily[0].humidity + "% humidity";
                    document.getElementById('humidity-day-2').textContent = post.daily[1].humidity + "% humidity";
                    document.getElementById('humidity-day-3').textContent = post.daily[2].humidity + "% humidity";
                    document.getElementById('humidity-day-4').textContent = post.daily[3].humidity + "% humidity";
                    document.getElementById('humidity-day-5').textContent = post.daily[4].humidity + "% humidity";



                    document.getElementById('uv-index-day-1').textContent = "UV index of " + post.daily[0].uvi;
                    document.getElementById('uv-index-day-2').textContent = "UV index of " + post.daily[1].uvi;
                    document.getElementById('uv-index-day-3').textContent = "UV index of " + post.daily[2].uvi;
                    document.getElementById('uv-index-day-4').textContent = "UV index of " + post.daily[3].uvi;
                    document.getElementById('uv-index-day-5').textContent = "UV index of " + post.daily[4].uvi;
                    
                    if (post.daily[0].uvi < 3) {
                        $("#uv-index-now").css("background-color", 'lightgreen');
                    } else if ((post.daily[0].uvi >= 3) && (post.daily[0].uvi < 5)) {
                        $("#uv-index-now").css("background-color", 'yellow');
                    } else if (post.daily[0].uvi >= 5) {
                        $("#uv-index-now").css("background-color", 'red');
                    };
            
           

                    document.getElementById('wind-speed-1').textContent = "wind speed of " + post.daily[0].wind_speed;
                    document.getElementById('wind-speed-2').textContent = "wind speed of " + post.daily[1].wind_speed;
                    document.getElementById('wind-speed-3').textContent = "wind speed of " + post.daily[2].wind_speed;
                    document.getElementById('wind-speed-4').textContent = "wind speed of " + post.daily[3].wind_speed;
                    document.getElementById('wind-speed-5').textContent = "wind speed of " + post.daily[4].wind_speed;
                 });

         }
         )};

 

        function getDates() {
        var thisDay = new Date();
        // construct tomorrow
        var thisDayPlusOne = new Date(thisDay);
        thisDayPlusOne.setDate(thisDayPlusOne.getDate() + 1);
        // construct day-after-tomorrow
        var thisDayPlusTwo = new Date(thisDay);
        thisDayPlusTwo.setDate(thisDayPlusTwo.getDate() + 2);
        // construct fourth day
        var thisDayPlusThree = new Date(thisDay);
        thisDayPlusThree.setDate(thisDayPlusThree.getDate() + 3);
        // construct fifth day
        var thisDayPlusFour = new Date(thisDay);
        thisDayPlusFour.setDate(thisDayPlusFour.getDate() + 4); 

        thisDay = thisDay.toString();
        thisDay = thisDay.split(" ");
        thisDay = thisDay.slice(1,3);
        thisDay = thisDay.join(" ");
            // console.log(thisDay);

        thisDayPlusOne = thisDayPlusOne.toString();
        thisDayPlusOne = thisDayPlusOne.split(" ");
        thisDayPlusOne = thisDayPlusOne.slice(1,3);
        thisDayPlusOne = thisDayPlusOne.join(" ");

        thisDayPlusTwo = thisDayPlusTwo.toString();
        thisDayPlusTwo = thisDayPlusTwo.split(" ");
        thisDayPlusTwo = thisDayPlusTwo.slice(1,3);
        thisDayPlusTwo = thisDayPlusTwo.join(" ");

        thisDayPlusThree = thisDayPlusThree.toString();
        thisDayPlusThree = thisDayPlusThree.split(" ");
        thisDayPlusThree = thisDayPlusThree.slice(1,3);
        thisDayPlusThree = thisDayPlusThree.join(" ");

        thisDayPlusFour = thisDayPlusFour.toString();
        thisDayPlusFour = thisDayPlusFour.split(" ");
        thisDayPlusFour = thisDayPlusFour.slice(1,3);
        thisDayPlusFour = thisDayPlusFour.join(" ");
        
        document.getElementById('date1').textContent = thisDay;
        document.getElementById('date2').textContent = thisDayPlusOne;
        document.getElementById('date3').textContent = thisDayPlusTwo;
        document.getElementById('date4').textContent = thisDayPlusThree;
        document.getElementById('date5').textContent = thisDayPlusFour;
         }
         getDates();

        
             
        // let str = thisDayPlusOne;
        // const thisDayPlusOneArr = str.split(" ");
        // console.log(thisDayPlusOneArr);
         
    
         function getDay() {
        //  var thisDate = Date();
        //     console.log(thisDate);
        //     var tomorrow = new Date(day+1);
        //     console.log(tomorrow);

        //     var d = new Date();
        //     console.log(d.getDate());

        
         var dayOfWeek = Date().split(" ");
         var today = dayOfWeek[0];
         var daysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"];
         var thisDayInd = daysArr.indexOf(today);
         
         if (thisDayInd > 2) {
            daysArr.push('Mon', 'Tue', 'Wed', 'Thu');
        };
         var day2 = thisDayInd + 1;
         var day3 = thisDayInd + 2;
         var day4 = thisDayInd + 3;
         var day5 = thisDayInd + 4;

         document.getElementById("dayOne").textContent = daysArr[thisDayInd]; 
         document.getElementById("dayTwo").textContent = daysArr[day2]; 
         document.getElementById("dayThree").textContent = daysArr[day3]; 
         document.getElementById("dayFour").textContent = daysArr[day4]; 
         document.getElementById("dayFive").textContent = daysArr[day5]; 

            console.log(daysArr);
         };
         
         getDay();
         
         
        //  function getDays(today) {

        //  }
         


    //  function displayLocation(city, state) {
    //     city = city.toUppercase;
    //     state = state.toUppercase;
    //     document.getElementById("location").textContent = city + ", " + state;
    //     console.log("it's running");
    //  };


    // UV index
    // favorable = <3;
    // moderate = 3<=UV<5;
    // severe = >=5

