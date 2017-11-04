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
		var rows = data.resultSets[1].rowSet;
		var j = 0;
		var html = "<div> " + date + "</div>";
		for (var i = 0; i < rows.length; i++) {
			if(j === 0) {
				html += "<div class='main-div'>"
				html += "<div class='div-table'>"
				html += "<div class='div-row'>";
				html += "<div class='div-cell-right'>" + rows[i][5] + " (" + rows[i][6] + ")</div>";
				html += "<div class='div-cell'>" + rows[i][21] + "</div>";
				html += "</div>";
				j++;
			} else {
				html += "<div class='div-row'>";
				html += "<div class='div-cell-right'>" + rows[i][5] + "(" + rows[i][6] + ")</div>";
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

