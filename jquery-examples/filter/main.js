$(function(){
	$( "div" ).filter(function(index, element){
		return index % 3 == 0 || $( element ).hasClass( "selected");
	}).css( "background-color", "red");
}

)

/*
$(function(){

	$( "div" ).filter( ":odd" ).css( "background-color" , "yellow" );

});
*/
