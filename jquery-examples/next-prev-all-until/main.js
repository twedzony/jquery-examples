$(function(){

	$( ".start" ).nextUntil( ".stop" ).css("background-color", "yellow");

	$( ".test" ).next().css("background-color", "yellow");

});