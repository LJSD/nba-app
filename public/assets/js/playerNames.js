console.log('hello world')

console.log($("#playerChooser").html())

function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data);

    div = $("#playerChooser")

     var list = "<input list = 'browsers'> <datalist id = 'browsers'>";
     for (var i = 0; i < data.length; i++) {
     	list += "<option value = '" + data[i].player_name + ' ' + data[i].pid + "'>"
     };

     list += "</datalist>"

     console.log(list);
    	
     div.html(list);

    // console.log($("#playerChooser").html());


  });
}

getPlayers();