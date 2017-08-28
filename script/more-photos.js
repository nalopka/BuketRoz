
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		$("body").attr("data-popup", "popup");


	moreImages.on("click", function(){

		bouquet.removeClass("zoom-photo").css({
			"opacity":"1",
			"visibility": "visible"});

		moreImages.css("display", "none");
		$("body").attr("data-popup", "");
	});
	bouquet.on("click",function(e){
		e.stopPropagation();
		bouquet.css({  
			"opacity":"0",
			"visibility":"hidden",});
		$(this).css({
			"opacity":"1",
			"visibility": "visible"}).toggleClass("zoom-photo");
		});
	});


});