$(document).ready(function(){
	var	arrowUp = $(".arrowup");
	var arrowDown = $(".arrowdown");
	var sale = $("#sale");
	var numberValue = $("#rose-count").val();
	var totalPrice, salePrice, currentCount;
	var startTotalPrice = numberValue * 80;
	var startSalePrice = numberValue * 72;
	$("#total-cost").text(startTotalPrice + " P");
	$("#sale-cost").text(startSalePrice + " ");

	

	$("#rose-count").on("input", function(){

		var tempValue = $("#rose-count").val();
		if (tempValue < 0) {
			$("#rose-count").val(numberValue);
		} else {
		numberValue = $("#rose-count").val();
		$("#rose-count").val(numberValue);
		totalPrice = numberValue * 80;
		salePrice = numberValue * 72;
		$("#total-cost").text(totalPrice + " P");
		$("#sale-cost").text(salePrice + " "); }
		
	});
	arrowUp.on("click", function(){
		numberValue++;
		$("#rose-count").val(numberValue).trigger("input");

	});
	arrowDown.on("click", function(){
		if (numberValue <= 1) return;
		numberValue--;
		$("#rose-count").val(numberValue).trigger("input");
	});
	
});