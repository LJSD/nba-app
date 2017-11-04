function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data);
  });
}

getPlayers();