$(document).ready(function(){
	var	arrowUp = $(".arrowup");
	var arrowDown = $(".arrowdown");
	var numberValue = $("#rose-count").attr("value");
	var totalPrice;
	var salePrice;
	var startTotalPrice = numberValue * 80;
	var startSalePrice = numberValue * 72;
	$("#total-cost").text(startTotalPrice + " P");
	$("#sale-cost").text(startSalePrice + " ");
	arrowUp.on("click", function(){
		numberValue++;
		$("#rose-count").attr("value", numberValue);
		totalPrice = numberValue * 80;
		salePrice = numberValue * 72;
		console.log(salePrice);
		$("#total-cost").text(totalPrice + " P");
		$("#sale-cost").text(salePrice + " ");

	});
	arrowDown.on("click", function(){
		numberValue--;
		$("#rose-count").attr("value", numberValue);
		totalPrice = numberValue * 80;
		salePrice = numberValue * 72;
		$("#total-cost").text(totalPrice + " P");
		$("#sale-cost").text(salePrice + " ");

	});
	


});