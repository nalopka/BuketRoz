$(document).ready(function(){
	var	arrowUp = $(".arrowup");
	var arrowDown = $(".arrowdown");
	var numberValue = $("#rose-count").val();
	var totalPrice, salePrice, currentCount;
	var startTotalPrice = numberValue * 80;
	var startSalePrice = numberValue * 72;
	$("#total-cost").text(startTotalPrice + " P");
	$("#sale-cost").text(startSalePrice + " ");

	$("#rose-count").on("change", function(){
		numberValue = $("#rose-count").val();
		console.log(numberValue);

		$("#rose-count").val(numberValue);
		totalPrice = numberValue * 80;
		salePrice = numberValue * 72;
		$("#total-cost").text(totalPrice + " P");
		$("#sale-cost").text(salePrice + " ");
		
	});
	


	arrowUp.on("click", function(){
		numberValue++;
		$("#rose-count").val(numberValue);
		totalPrice = numberValue * 80;
		salePrice = numberValue * 72;
		$("#total-cost").text(totalPrice + " P");
		$("#sale-cost").text(salePrice + " ");

	});
	arrowDown.on("click", function(){
		numberValue--;
		if (numberValue >= 2) {
			$("#rose-count").val(numberValue);
			totalPrice = numberValue * 80;
			salePrice = numberValue * 72;
			$("#total-cost").text(totalPrice + " P");
			$("#sale-cost").text(salePrice + " ");
		} else {
			numberValue = 2;}
	});
	
});