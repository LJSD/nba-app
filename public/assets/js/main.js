// Sign Up Form
function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".signup-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      name: $("#ca").val().trim(),
      email: $("#email").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(
      function() {
        console.log("New user created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

//PlayerStats Graphs

// data
var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
var numberData = [12, 19, 3, 5, 2, 3];

 // var graph = $("#graphs").html();
 var ctx = document.getElementById("myChart").getContext("2d");

  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: colors,
          datasets: [{
              label: '# of Votes',
              lineTension: 0.15,
              data: numberData,
              backgroundColor: [
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

