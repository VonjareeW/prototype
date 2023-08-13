// Assignment code here
// Declare the variable 'name' outside the function to make it accessible globally
var name = "";

// Function to greet the user
function greeting() {
  // Use the global 'name' variable to store the user's name
  var name = prompt("What is your name?");

  // Use template literals for string interpolation
  alert(`Welcome to this website, ${name}! Please Have a wonderful day full of joy!`);
}

// Call the greeting function twice
greeting();


// Function to calculate the amount due
function amountdue(price, quantity) {
  // Remove the local 'price' and 'quantity' variables as they are unnecessary
  // The function parameters already serve this purpose
  var subtotal = price * quantity;
  var tax = 1.05;
  var total = subtotal * tax;
  return total;
}

// Call the amountdue function with specified arguments and display the result
var priceInput = parseFloat(prompt("What is the price?"));
var quantityInput = parseInt(prompt("What is the quantity?"), 10);
var totalAmount = amountdue(priceInput, quantityInput);
alert(`The amount due is $${totalAmount.toFixed(2)}`);
