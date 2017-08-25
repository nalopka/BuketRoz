
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		$("body").attr("data-popup", "popup");


	moreImages.on("click", function(){
		moreImages.css("display", "none");
		$("body").attr("data-popup", "");
	});
	bouquet.on("click",function(e){
		e.stopPropagation();
		moreImages.toggleClass("zoom-photo");
		});
	});


});