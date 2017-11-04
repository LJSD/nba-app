function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data[0].player_name);

    div = $("#playerChooser")

     var list = "<input list = 'browsers'> <datalist id = 'browsers'>";
     for (var i = 0; i < data.length; i++) {
     	list += "<option value = '" + data[i].player_name + "'>"
     };

     list += "</datalist>"

     console.log(list);
    	
     div.html(list);





    // console.log($("#playerChooser").html());


  });
}

getPlayers();