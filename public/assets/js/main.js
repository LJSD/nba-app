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
            console.log(newUser); 
            //loginAttempt(newUser.email, newUser.password);
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
function setLoginButton() {
    
    $("#loginbtn").on("click", function(event) {
        event.preventDefault();
        email = $('#email').val();
        password = $('#password').val();
        var account = new Account();
        account.doLogin(email, password, goToHome);
    });    
};

function goToHome(success){
    if(success){
        window.location.href = "/";
    }
    else{
        alert("Username or password incorrect");
    }
}

addModal();
searchOption();
goBackToHome();


//When the page loads, grab all of users
// $.get("/api/all", function(data) {

//   if (data.length !== 0 && newUser) {
//     for (var i = 0; i < data.length; i++) {
//       console.log(newUser);
//     }
//   }

// });


//PlayerStats Graphs

//  var ctx = document.getElementById("graphs").getContext('2d');
//  console.log("ctx is ",ctx)

//  var graphs = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

