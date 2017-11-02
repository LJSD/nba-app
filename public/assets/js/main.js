// My Account Form

// Function for creating a user account 
function newAccount() {
    $("#signupbtn").on("click", function(event) {
        event.preventDefault();

        // Make a newUser object
        var newUser = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };
        
        //Send an AJAX POST-request with jQuery
        $.post("/api/new", newUser)
        // On success, run the following code
        .done(function(result) {
            //console.log(newUser); 
            // TODO --v this is broken
            // loginAttempt(newUser.email, newUser.password);
        });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");
        $("#repeat_password").val("")
    });
};

// Function for generating a modal window after user signs up
function addModal() {
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("signupbtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    if(btn){
            btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if(span){
            span.onclick = function() {
            modal.style.display = "none";
        }
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}; 

//Function for generating a modal window if user chooses Search
function searchOption() {
    var modal = document.getElementById('searchModal');
    // Get the button that opens the modal
    var btn = document.getElementById("searchbtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-search")[0];
    
    // When the user clicks the button, open the modal 
    if(btn){
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if(span){
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
};     

//Function for taking user back to Home page
function goBackToHome() {
    $("#gohomebtn").on("click", function(event) {
        event.preventDefault();
        document.location.href = "/";
    });
};
//Login
function setLogin() {
    $("#loginbtn").on("click", function(event) {
        event.preventDefault();
        email = $('#email').val();
        password = $('#password').val();
        loginAttempt(email, password);
    });    
};

function loginAttempt(email, password){
    $.post('/api/loginattempt', {"email":email, "password":password})
    .done((result)=>{
        let res = JSON.parse(result);
        /* if successful, direct them to the home page */
        if(res.success){
            window.location.href = '../';
        }
        else{
            $('#message_area').html("email/password incorrect"); 
        }
    })
    .fail((error)=>{
        console.log(error);
    });
}


addModal();
searchOption();
goBackToHome();


//When the page loads, grab all of users
// $.get("/api/all", function(data) {

//   if (data.length !== 0 && newUser) {
//     for (var i = 0; i < data.length; i++) {
//       //console.log(newUser);
//     }
//   }

// });

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

