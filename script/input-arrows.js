$(function(){
	var	arrowUp = $(".arrowup");
	var arrowDown = $(".arrowdown");
	var sale = $("#sale");
	var inputValue = $("#rose-count");
	var numberValue = inputValue.val();
	var totalPrice, salePrice, currentCount;
	var startTotalPrice = numberValue * 80;
	var startSalePrice = numberValue * 72;
	$("#total-cost").text(startTotalPrice + " P");
	$("#sale-cost").text(startSalePrice + " ");

	inputValue.on("input", function(){

		var tempValue = inputValue.val();
		if (tempValue < 0) {
			inputValue.val(numberValue);
		} else  if (tempValue >= 7 ) {
			sale.css("opacity","1");
			numberValue = inputValue.val();
			inputValue.val(numberValue);
			totalPrice = numberValue * 80;
			salePrice = numberValue * 72;
			$("#total-cost").text(totalPrice + " P");
			$("#sale-cost").text(salePrice + " "); 
		} else {
			sale.css("opacity","0");
			numberValue = inputValue.val();
			totalPrice = numberValue * 80;
			$("#sale-cost").text(totalPrice + " ");
		}
		
	});
	arrowUp.on("click", function(){
		numberValue++;
		inputValue.val(numberValue).trigger("input");

	});
	arrowDown.on("click", function(){
		if (numberValue <= 1) return;
		numberValue--;
		inputValue.val(numberValue).trigger("input");
	});
	
});