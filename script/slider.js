$(function(){
	var buttonLeft = $('.move-slider[data-direction="left"]');
	var buttonRight = $('.move-slider[data-direction="right"]');
	var sliderSmall = $(".slider-small")
	var sliderSmallLimit = sliderSmall.width() - $(".slider-container").width(); 
	console.log(sliderSmallLimit);
	var moveSlider = function(direction) {
	var left = sliderSmall.position().left; 
	console.log(left);
	var directionValue = direction == 'right' ? -1 : 1;
	var newLeft = left + 805 * directionValue;
	if (newLeft > 0) {
		newLeft = 0; 
		buttonLeft.css("background-color", "grey");} 
	else {
		buttonLeft.css("background-color", "#ffcf28");}


	if (newLeft < -sliderSmallLimit) {
		newLeft = -sliderSmallLimit;
		buttonRight.css("background-color", "grey");
	} else { 
		buttonRight.css("background-color", "#ffcf28");}
	
	sliderSmall.css("left", newLeft); 
	}

	$(".move-slider").on("click", function(){
	var direction = $(this).attr('data-direction'); 
	moveSlider(direction); 
});
});










