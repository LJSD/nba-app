//NBA Stats API
function NbaStatsAPI(){
	this.jDiv;
}

NbaStatsAPI.prototype.loadScores = function(){
	var jDiv = this.jDiv;
	var statsUrl = "http://stats.nba.com/stats/scoreboard/?GameDate= " + this.date + "&LeagueID=00&DayOffset=0";
	var date = this.date;
	$.ajax({
		url: statsUrl,
		dataType: "jsonp",
	}).done(function(data){
	//console.log(data);

		var rows = data.resultSets[1].rowSet;
		var j = 0;
		var html = "<div class='date-div'> " + date + "</div>";
		for (var i = 0; i < rows.length; i++) {
			if(j === 0) {
				html += "<div class='main-div'>"
				html += "<div class='div-table'>"
				html += "<div class='div-row'>";
				html += "<div class='div-cell-right'>" + rows[i][4] + "</div>";
				html += "<div class='div-cell'>" + rows[i][5] + " (" + rows[i][6] + ")</div>";
				html += "<div class='div-cell'>" + rows[i][21] + "</div>";
				html += "</div>";
				j++;
			} else {
				html += "<div class='div-row'>";
				html += "<div class='div-cell-right'>" + rows[i][4] + "</div>";
				html += "<div class='div-cell'>" + rows[i][5] + "(" + rows[i][6] + ")</div>";
				html += "<div class='div-cell'>" + rows[i][21] + "</div>";
				html += "</div><div class='div-row'><div class='div-cell'>&nbsp;</div></div>";
				html += "</div>";
				html += "</div>";
				j++;
				j = 0;
			}
		};
		html+="</div>";
		jDiv.html(html);
	});	
};

NbaStatsAPI.prototype.displayScores = function(div){
	this.jDiv = $('#'+div);
	this.date = getFormattedDate(-1);
	this.jDiv.html("Retrieving scores from "+this.date+"...");
	this.loadScores();
}

//Sports Feed API

NbaStatsAPI.prototype.loadScores2 = function(){
	var jDiv2 = this.jDiv2;
	var statsUrl2 = "https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM";
	var date = this.date;
	$.ajax({
		url: statsUrl2,
		dataType: "jsonp",
	}).done(function(data){
	console.log(data);
	});	
};



