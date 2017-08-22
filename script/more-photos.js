$(function(){
	var firstRose = $(".first-rose");
	var secondRose = $(".second-rose");
	var morePhotos = $(".more-rose");
	var randomNumber, secondNumber;
	morePhotos.on("click", function(){
		randomNumber = 1 + Math.floor(Math.random() * 9);
		secondNumber = randomNumber + 1;
		firstRose.css("background-image", " url('img/our-rose/rose"+ randomNumber +".png') ");
		secondRose.css("background-image", " url('img/our-rose/rose"+ secondNumber  +".png') ");
	});
});