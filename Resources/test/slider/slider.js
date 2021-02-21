var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var priceoutput = document.getElementById("totalprice");
const price = 12;

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  priceoutput.innerHTML = this.value * this.price;
}