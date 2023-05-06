// Chapter 31
let currentDate = new Date();
let dateTimeString = "Current date and time: " + currentDate.toString();

document.write("<h1>" + dateTimeString + "</h1>");

// Chapter 32
let currentDates = new Date();
let currentMonth = currentDates.toLocaleString('default', { month: 'long' });

alert("The current month is " + currentMonth);

// Chapter 33
let currentDatee = new Date();
let currentDay = currentDatee.toLocaleString('default', { weekday: 'short' });

alert("The first 3 letters of the current day are " + currentDay);


// Chapter 34
let currenntDate = new Date();
let currentHour = currenntDate.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

//K-Electric bill
let customerName = prompt("Enter your name:");
let currentMon = new Date().toLocaleString('default', { month: 'long' });
let units = parseFloat(prompt("Enter number of units consumed:"));
let chargesPerUnit = 16;
let netAmount = units * chargesPerUnit;
let dueDate = new Date('2023-05-20');
let todayDate = new Date();
let latePaymentSurcharge = 0;

if (todayDate > dueDate) {
  latePaymentSurcharge = 350;
}

let grossAmount = netAmount + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of units: " + units.toFixed(2) + "<br>");
document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");
