function Tax() {
  var Original = document.getElementById("oprice").value;
  var Tax = document.getElementById("tax").value;
  
  var TaxToDecimal = Tax/100;
  var TaxPlusOne = TaxToDecimal+1;
  var NewPrice = Original*TaxPlusOne;
  document.getElementById("aprice").innerHTML = "The final cost of this item will be: $" + NewPrice;
}
