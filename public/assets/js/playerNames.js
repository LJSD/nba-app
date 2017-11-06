
function getPlayers() {
  $.get("/api/players", function(data) {
    // console.log(data);

    div = $("#playerChooser")

     var list = "<form><input id='playerSelect' list = 'browsers'> <datalist id = 'browsers'>";
     for (var i = 0; i < data.length; i++) {
     	list += "<option value = '" + data[i].player_name + ' ' + data[i].pid + "'>"
     };

     list += "</datalist></form>"

     // console.log(list);
    	
     div.html(list);

    // console.log($("#playerChooser").html());
  });
}

function displayPlayer() {
    $("#submitForm").on("click", function() {
        var player = $("#playerSelect").val();
        console.log(player);
        console.log('hello world')
    });
};
getPlayers();
displayPlayer();

// action='./assets/js/individualStats.js' method='get'