$(document).ready(function () {
	$("button").addClass("button text");
});

var ioSelector = "#io";
var oneSelector = "#1";
var twoSelector = "#2";
var threeSelector = "#3";
var fourSelector = "#4";
var fiveSelector = "#5";
var sixSelector = "#6";
var sevenSelector = "#7";
var eightSelector = "#8";
var nineSelector = "#9";
var dotSelector = "#dot";
var zeroSelector = "#0";
var cSelector = "#c";
var addSelector = "#btnAdd";
var subSelector = "#btnSub";
var mulSelector = "#btnMul";
var divSelector = "#btnDiv";
var equalsSelector = "#equals";
var operand1Selector = "#hdnOperand1";
var operatorSelector = "#hdnOperator";

function clicked(clicked_id) {
	var operand2;

	switch (clicked_id) {
		case $(oneSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(oneSelector).text());
			break;
		case $(twoSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(twoSelector).text());
			break;
		case $(threeSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(threeSelector).text());
			break;
		case $(fourSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(fourSelector).text());
			break;
		case $(fiveSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(fiveSelector).text());
			break;
		case $(sixSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(sixSelector).text());
			break;
		case $(sevenSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(sevenSelector).text());
			break;
		case $(eightSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(eightSelector).text());
			break;
		case $(nineSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(nineSelector).text());
			break;
		case "dot":
			var localInput = $(ioSelector).val();
			var dotText = $(dotSelector).text();
			if (localInput.indexOf(dotText) > 0)
				return;
			$(ioSelector).val(localInput + dotText);
			break;
		case $(zeroSelector).text():
			$(ioSelector).val($(ioSelector).val() + $(zeroSelector).text());
			break;
		case "btnAdd":
			var localOperand = $(ioSelector).val();
			if (localOperand === '')
				return;
			$(operand1Selector).val(Number(localOperand));
			$(operatorSelector).val($(addSelector).text());
			$(ioSelector).val('');
			//$(ioSelector).val($(addSelector).text());
			break;
		case "btnSub":
			var localOperand = $(ioSelector).val();
			if (localOperand === '')
				return;
			$(operand1Selector).val(Number(localOperand));
			$(operatorSelector).val($(subSelector).text());
			$(ioSelector).val('');
			break;
		case "btnMul":
			var localOperand = $(ioSelector).val();
			if (localOperand === '')
				return;
			$(operand1Selector).val(Number(localOperand));
			$(operatorSelector).val($(mulSelector).text());
			$(ioSelector).val('');
			break;
		case "btnDiv":
			var localOperand = $(ioSelector).val();
			if (localOperand === '')
				return;
			$(operand1Selector).val(Number(localOperand));
			$(operatorSelector).val($(divSelector).text());
			$(ioSelector).val('');
			break;
		case $(cSelector).text().toLowerCase():
			$(ioSelector).val('');
			break;
		case "equals":
			var localOperand = $(ioSelector).val();
			if (localOperand === '')
				return;
			var operand1 = Number($(operand1Selector).val());
			var operator = $(operatorSelector).val();
			operand2 = Number(localOperand);
			//alert(operand1 + ' ' + operand2 + ' ' + operator);
			$(ioSelector).val(calculate(operand1, operand2, operator));
			break;
		default:;
	}
}
function calculate(operand1, operand2, operator) {
	switch (operator) {
		case "+":
			return operand1 + operand2;
		case "-":
			return operand1 - operand2;
		case "*":
			return operand1 * operand2;
		case "/":
			return operand1 / operand2;
		default:
			return "error";
	}

}
