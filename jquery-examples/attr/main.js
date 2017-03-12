$(function(){

	alert( $( "img" ).attr( "alt" ) );

});

/*

it's also possible to set new attributes

.attr( "src", "new source");
.attr( "alt", "new alt");

or

.attr({
	src : "google.pl/foo.png",
	alt : "some new alt",
	title : "some new title" 
});

*/