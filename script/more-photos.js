
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");
	var currentbouquet;

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		$("body").attr("data-popup", "popup");

		// -----
		moreImages.on("click", function(){
			moreImages.css("display", "none");
			$("body").attr("data-popup", "");
		});
		// ------
		bouquet.on("click",function(e){
			e.stopPropagation();
			currentbouquet = $(this).attr("data-item");
			bouquet.css("opacity", "0");
			$(".zoom").addClass("bouquet zoom-active").attr("data-item", currentbouquet );
		});
	});

	$(".zoom").on("click", function(e){
			e.stopPropagation();
			$(this).removeClass("bouquet zoom-active");
			bouquet.css("opacity", "1");
			
		});
	$(".right").on("click", function(e){
			e.stopPropagation();
					$(".zoom").attr("data-item", currentbouquet++ );
			});
	$(".left").on("click", function(e){
			e.stopPropagation();
					$(".zoom").attr("data-item", currentbouquet-- );
			});


});