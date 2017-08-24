
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		$("body").css("overflow", "hidden");
		$("body").css("padding-right", "15px");
		$("body").css("box-sizing", "border-box");
		
	moreImages.on("click", function(){
		moreImages.css("display", "none");
		$("body").css("overflow", "scroll");
		$("body").css("padding-right", "0");
		$("body").css("box-sizing", "border-box");
	});
	bouquet.on("click",function(e){
		e.stopPropagation();
		moreImages.toggleClass("zoom-photo");
		});
	});


});