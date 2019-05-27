


//  {
//   "id": 4140963,
//   "name": "Washington, D. C.",
//   "country": "US",
//   "coord": {
//     "lon": -77.036369,
//     "lat": 38.895111
//   }

// api key: 180dfe9069cad071f7af7f9f88a628ee


$(document).ready(function()  {

  $.get('http://api.openweathermap.org/data/2.5/weather?id=4140963&APPID=180dfe9069cad071f7af7f9f88a628ee', function(getweather) {

    let city = getweather.name;
    let temp = getweather.main.temp;
    let farenheit = Math.floor((temp - 273.15) * 9/5 + 32);

  //$('#btn').on('click', function(){
      $('.city').html(getweather.name);
      $('.temp').html(getweather.main.temp);
      $('.farenheit').html(farenheit);
    
      console.log(`the city is ${city}, kelvin is ${temp}, farenheit is ${farenheit}`);
            
  });

});


