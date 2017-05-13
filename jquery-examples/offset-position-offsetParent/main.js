$(function(){

	alert($( "div" ).offset().left);
	alert($( "div" ).position().top);

	$( ".inner" ).offsetParent().css("background-color", "yellow");

});