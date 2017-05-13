$(function(){

	$(document).one("click", "div", function(){
		$(".test").append("click ");
	})

	$(document).on("click", "span", function(){
		$(".test").append("click ");
	})

	$(document).one("click", "p", function(){
		$(document).off("click", "span");
		$(".test").append("disabled ");
	})
});