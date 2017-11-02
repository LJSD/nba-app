$(document).ready(function(){
	$.ajax("/api/twitter", {
		type: "GET"
	}).then(function(data){
		console.log(data);
	});
})
