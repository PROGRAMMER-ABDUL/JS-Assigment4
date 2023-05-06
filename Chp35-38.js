function displayDateTime() {
    let dateTime = new Date().toLocaleString();
    document.write("Current date and time: " + dateTime);
  }

/////////////////////////////////////////////////
function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "!");
  }

/////////////////////////////////////////////////
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  let result = addNumbers(5, 7);
  console.log(result); // output: 12

//////////////////////////////////////////////////
function performOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        result = "Invalid operator";
    }
  
    return result;
  }

  let result1 = performOperation(5, 7, "+");
  console.log(result); // output: 12
  
  result = performOperation(5, 7, "-");
  console.log(result); // output: -2
  
  result = performOperation(5, 7, "*");
  console.log(result); // output: 35
  
  result = performOperation(5, 7, "/");
  console.log(result); // output: 0.7142857142857143
  
  result = performOperation(5, 7, "%");
  console.log(result); // output: 5
  
////////////////////////////////////////////////////
function square(num) {
    return num * num;
  }
  const result2 = square(5);
  console.log(result); // output: 25
    
////////////////////////////////////////////////////
function findLongestWord(str) {
    // split the string into an array of words
    const words = str.split(' ');
    
    // initialize a variable to hold the longest word
    let longestWord = '';
    
    // loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // if the current word is longer than the previous longest word
      if (words[i].length > longestWord.length) {
        // update the longest word variable
        longestWord = words[i];
      }
    }
    
    // return the longest word
    return longestWord;
  }

  const inputString = 'Web Development Tutorial';
  const longestWord = findLongestWord(inputString);
  console.log(longestWord); // output: 'Development'
  