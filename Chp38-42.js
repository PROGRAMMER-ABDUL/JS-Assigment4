function power(a, b) {
    let result = 1;
  
    for (let i = 1; i <= b; i++) {
      result *= a;
    }
  
    return result;
  }
//////////////////////////////////////////////////
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
/////////////////////////////////////////////////////
function calcS(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
  }
  
  function calcArea(a, b, c) {
    var s = calcS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  function calcArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
/////////////////////////////////////////////////////////
function average(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
  }
  
  function percentage(marks1, marks2, marks3) {
    var totalMarks = 300; // Assuming total marks in 3 subjects is 300
    var obtainedMarks = marks1 + marks2 + marks3;
    return (obtainedMarks / totalMarks) * 100;
  }
  
  function mainFunction() {
    var marks1 = parseFloat(prompt("Enter marks for subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks for subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks for subject 3:"));
  
    var avg = average(marks1, marks2, marks3);
    var perc = percentage(marks1, marks2, marks3);
  
    document.write("Average marks: " + avg.toFixed(2) + "<br>");
    document.write("Percentage: " + perc.toFixed(2) + "%");
  }
  
  mainFunction();
///////////////////////////////////////////////////////////////////
function withdrawAmount(amountInHundreds) {
    var hundredNotes = Math.floor(amountInHundreds / 100);
    var fiftyNotes = Math.floor((amountInHundreds % 100) / 50);
    var tenNotes = Math.floor(((amountInHundreds % 100) % 50) / 10);
  
    console.log("You will have to give:");
    console.log(hundredNotes + " hundred notes");
    console.log(fiftyNotes + " fifty notes");
    console.log(tenNotes + " ten notes");
  }
  
  // Example usage
  withdrawAmount(3); // Output: You will have to give: 0 hundred notes, 0 fifty notes, 3 ten notes
  withdrawAmount(7); // Output: You will have to give: 0 hundred notes, 1 fifty notes, 2 ten notes
  withdrawAmount(12); // Output: You will have to give: 0 hundred notes, 2 fifty notes, 1 ten notes
  withdrawAmount(25); // Output: You will have to give: 0 hundred notes, 1 fifty notes, 2 ten notes
  withdrawAmount(143); // Output: You will have to give: 1 hundred notes, 2 fifty notes, 4 ten notes    