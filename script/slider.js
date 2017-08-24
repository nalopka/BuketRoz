$(function() {
	var buttonLeft = $('.move-slider[data-direction="left"]');
	var buttonRight = $('.move-slider[data-direction="right"]');
	var sliderSmall = $(".slider-small");
	var sliderSmallLimit = sliderSmall.width() - $(".slider-container").width(); 
	var end = true,
		left,
		directionValue,
		newLeft,
		direction;
	var moveSlider = function(direction) {
		left = sliderSmall.position().left; 
		directionValue = direction == 'right' ? -1 : 1;
		if (end) {

			end = false;
			setTimeout(function(){ end = true; },1000);

			newLeft = left + 805 * directionValue;
			if (newLeft > 0) {
				newLeft = 0; 
				buttonLeft.addClass("disable");} 
			else {
				buttonLeft.removeClass("disable");}

			if (newLeft < -sliderSmallLimit) {
				newLeft = -sliderSmallLimit;
				buttonRight.addClass("disable");} 
			else { 
				buttonRight.removeClass("disable");}
			sliderSmall.css("left", newLeft);
		}
	}
	$(".move-slider").on("click", function() {
		direction = $(this).attr('data-direction'); 
		moveSlider(direction); 
		
	});
});










