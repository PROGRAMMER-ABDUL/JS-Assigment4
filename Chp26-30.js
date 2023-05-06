// Chapter 26
let num = prompt("Enter a positive integer:");
document.write("<h1>Number: " + num + "</h1>");
document.write("<h1>Round off value: " + Math.round(num) + "</h1>");
document.write("<h1>Floor value: " + Math.floor(num) + "</h1>");
document.write("<h1>Ceil value: " + Math.ceil(num) + "</h1>");

// Chapter 27
let num1 = parseFloat(prompt("Enter a negative floating-point number:"));
document.write("<h1>Number: " + num1 + "</h1>");
document.write("<h1>Round off value: " + Math.round(num1) + "</h1>");
document.write("<h1>Floor value: " + Math.floor(num1) + "</h1>");
document.write("<h1>Ceil value: " + Math.ceil(num1) + "</h1>");

// Chapter 28
let numb = parseFloat(prompt("Enter a number:"));
let absNum = Math.abs(numb);
document.write("<h1>The absolute value of " + numb + " is " + absNum + "</h1>");

// Chapter 29
let dice = Math.floor(Math.random() * 6) + 1;
document.write("<h1>The value of the dice is: " + dice + "</h1>");

// Chapter 30
let coin = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("<h1>The coin landed on " + coin + "!</h1>");

// Question 6
let digit = Math.floor(Math.random() * 100) + 1;
document.write("<h1>The random number is: " + digit + "</h1>");

// Question 7
let weight = prompt("What is your weight?");
let parsedWeight = parseFloat(weight);

if (isNaN(parsedWeight)) {
  let suffix = weight.slice(-3).toLowerCase();
  if (suffix === "kgs" || suffix === "kg") {
    parsedWeight = parseFloat(weight.slice(0, -3));
  } else if (suffix === "lbs") {
    parsedWeight = parseFloat(weight.slice(0, -3)) / 2.20462;
  } else {
    parsedWeight = parseFloat(weight.slice(0, -2));
  }
}

document.write("<h1>Your weight is: " + parsedWeight + " kilograms</h1>");

// Question 8
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10:");

if (guess == secretNumber) {
  document.write("<h1>Congratulations, you guessed the secret number!</h1>");
} else {
  document.write("<h1>Sorry, the secret number was " + secretNumber + ".</h1>");
}

