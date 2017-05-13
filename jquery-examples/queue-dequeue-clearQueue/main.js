$(function(){

	$( "#start").click(function(){
		$( "#an" )
	.animate({ left: "200"},1000) 
	.animate({ top: "200"},1000) 
	.hide( 1000 )
	.queue(function(){
		$( this ).css( "background-color", "yellow").dequeue()
	})	
	.show( 1000 )
	})

	$( "#stop").click(function(){
		$( "#an" ).clearQueue()
	})
});