$(function(){

	$( "#test" ).keypress(function(){
		$( "div" ).append( "clicked " );
	});

	$( "#test" ).keyup(function(){
		$( "div" ).append( "released " );
	});

});

/*
	function keydown works also with alt, shift, esc, etc. 
*/