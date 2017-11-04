$(document).ready(function() {

  console.log('weather test')

  var apikey = '60b18c12e98e451fa5a192111170311';
  var location = 'oakland';
  var weather = function() {
    var queryURL = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key='+apikey+'&q='+location+'&format=json&date=2009-12-01';

    $.ajax
    ({
      type: "GET",
      url: queryURL,
      dataType: 'json',
      async: false,
      // headers: {
      //   "Authorization": "Basic " + btoa(username + ":" + password)
      // },
      success: function (){
        alert('Query Sucessful'); 
      }
    }).done(function(response) {
      console.log(response)
      var temperature = response.data.weather[0].maxtempF;
      console.log(temperature);
    });  
  }
      
  weather();
});
