
function getPlayers() {
  $.get("/api/players", function(data) {
    // console.log(data);

    div = $("#playerChooser")

     var list = "<form><select id = 'browsers'>";
     for (var i = 0; i < data.length; i++) {
     	list += "<option value = '" + data[i].pid + "'>" + data[i].player_name + "</option>"
     };

     list += "</select></form>"

     // console.log(list);
    	
     div.html(list);

    // console.log($("#playerChooser").html());
  });
}

function displayPlayer() {
    $("#submitForm").on("click", function() {
        var player = $("#browsers").val();
        var text = $("#browsers :selected").text();

        $("#spotlight").html('<h3>' + text + '</h3>');
        console.log(player);
        console.log(text);
        console.log('hello world')
    });
};
getPlayers();
// displayPlayer();

// action='./assets/js/individualStats.js' method='get'

// cut from line 8
// <input id='playerSelect' list = 'browsers'>