
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");
	var currentbouquet,
		currentSlide;

	morePhotos.on("click", function(){
		moreImages.css("display", "flex");
		$("body").attr("data-popup", "popup");

		// -----
		moreImages.on("click", function(){
			moreImages.css("display", "none");
			$("body").attr("data-popup", "");
			// скопировано из .zoom, надо как-то подсосать
			$(".zoom").removeClass("bouquet zoom-active");
			bouquet.css("opacity", "1");
		});
		// ------
		bouquet.on("click",function(e){
			e.stopPropagation();
			currentbouquet = $(this).attr("data-item");
			bouquet.css("opacity", "0");
			$(".zoom").addClass("bouquet zoom-active").attr("data-item", currentbouquet );
			currentSlide = $(".zoom").attr("data-item");
		});
	});

	$(".zoom").on("click", function(e){
			e.stopPropagation();
			$(this).removeClass("bouquet zoom-active");
			bouquet.css("opacity", "1");
			
		});

	$(".left").on("click", function(e){
			e.stopPropagation();
			if (currentSlide <= 1) return;
			currentSlide--;
			$(".zoom").attr("data-item", currentSlide);
			});

	$(".right").on("click", function(e){
			e.stopPropagation();
			if (currentSlide >= 8) return;
			currentSlide++;
			$(".zoom").attr("data-item", currentSlide);
			});



});