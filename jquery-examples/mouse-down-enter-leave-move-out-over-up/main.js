$(function(){

	$( ".outer" ).mouseenter(function(){
		$( ".test" ).append("mouseenter<br/>");
	})

	$( ".outer" ).mouseleave(function(){
		$( ".test" ).append("mouseleave<br/>");
	})
	$( ".outer" ).mouseover(function(){
		$( ".test" ).append("mouseover<br/>");
	})

	$( ".outer" ).mouseout(function(){
		$( ".test" ).append("mouseout<br/>");
	})
	$( ".outer" ).mousedown(function(){
		$( ".test" ).append("mousedown<br/>");
	})

	$( ".outer" ).mouseup(function(){
		$( ".test" ).append("mouseup<br/>");
	})

});