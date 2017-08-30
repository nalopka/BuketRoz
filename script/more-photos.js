
$(function(){
	var morePhotos = $(".more-rose");
	var moreImages = $(".more-images");
	var bouquet = $(".bouquet");
	var currentbouquet,
		currentSlide,
		changeImage,
		changeImagePosition;


	$("[data-gallery]").on("click", function() {
		moreImages.css("display", "flex");
		$("body").attr("data-popup", "popup");
	});


	$("[data-gallery]").on("click", ".more-images",  function() {
		moreImages.css("display", "none");
		$("body").attr("data-popup", "");
		// скопировано из .zoom, надо как-то подсосать
		$(".zoom").removeClass("bouquet zoom-active");
		bouquet.css("opacity", "1");
		});

	$("[data-gallery]").on("click", ".bouquet", function(e) {
		e.stopPropagation();
		currentbouquet = $(this).attr("data-item");
		bouquet.css("opacity", "0");
		$(".zoom").addClass("bouquet zoom-active").attr("data-item", currentbouquet );
		currentSlide = $(".zoom").attr("data-item");

	});

	$(".zoom").on("click", function(e){
			e.stopPropagation();
			$(this).removeClass("bouquet zoom-active");
			bouquet.css("opacity", "1");
			
		});




	
	changeImage = $(".move-image");
	changeImagePosition = $(".move").attr("data-move");

	$("[data-gallery='gallery']").on("click", ".move-image", function() {

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