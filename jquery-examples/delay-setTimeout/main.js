$(function(){

	$( "p" ).delay(2000).fadeIn();

	setTimeout(function(){
		$( ".test" ).fadeOut();
	},2000);

});