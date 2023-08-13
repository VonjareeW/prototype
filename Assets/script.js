// Assignment code here
var name=""
function greeting(){
  var name=prompt("What is your name ?");
 
 alert("Welcome to this website " + name);
}
greeting();
greeting();

function amountdue(price, quantity){
  var price=prompt("What is the price ");
  var quantity=prompt("What is the quantity");
  var subtotal=price * quantity;
  var tax = 1.05;
  var total =subtotal * tax;
  return total;
}

alert("The amount due is $ " + amountdue(10,3));