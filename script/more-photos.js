
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		bouquet.on("click",function(){
	});
	});
	moreImages.on("click", function(){
		moreImages.css("display", "none");
	});


});