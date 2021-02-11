
//do sum sums to give "Your total bill is" and display to two decimal places
//display the sum includig the tip.

var preTipTotal = 23.42;
var tipPercentage= 0.1;
var totalBill=preTipTotal*(1+tipPercentage);
var tip= preTipTotal*tipPercentage;
document.write("Your total bill, with tip, is £" + totalBill.toFixed(2) + " , the tip being £" + tip.toFixed(2));


