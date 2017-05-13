$(function(){

	$( ".parent3" ).parentsUntil(".parent1").css("border", "1px solid red");
	$( ".parent1" ).parent().css("border", "1px solid green");

});

/*$( ".parent3" ).parents(".parent1").css("border", "1px solid yellow");*/