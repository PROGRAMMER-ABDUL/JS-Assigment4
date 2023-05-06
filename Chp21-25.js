// Chapter 21 //
const cities = ['new york', 'los angeles', 'san francisco'];

// Convert all city names to uppercase
const uppercaseCities = cities.map(city => city.toUpperCase());
console.log(uppercaseCities);

// Convert all city names to lowercase
const lowercaseCities = cities.map(city => city.toLowerCase());
console.log(lowercaseCities);

// Chapter 22 //
const string = 'Hello, World!';

// Measure the length of the string
const length = string.length;
console.log(`The length of the string is ${length} characters.`);

// Extract the first 5 characters of the string
const firstFive = string.slice(0, 5);
console.log(`The first 5 characters of the string are '${firstFive}'.`);

// Extract the last 6 characters of the string
const lastSix = string.slice(-6);
console.log(`The last 6 characters of the string are '${lastSix}'.`);


// Chapter 23 //
const strings = 'This is a test string';
const segments = ['test', 'foo', 'bar'];

for (let i = 0; i < segments.length; i++) {
  const segment = segments[i];
  if (strings.includes(segment)) {
    console.log(`Found segment '${segment}' in string.`);
  } else {
    console.log(`Did not find segment '${segment}' in string.`);
  }
}


// Chapter 24 //
const myString = "Hello World";
const index = 6; // 0-based index, the 7th character in the string

const charAtIndex = myString.charAt(index);

console.log(`The character at index ${index} is "${charAtIndex}".`);


// Chapter 25 //
let myword = "Hello world";
const Index = 6; // 0-based index, the 7th character in the string
const newChar = "W";

myword = myword.substr(0, index) + newChar + myword.substr(Index + 1);

console.log(`The new string is "${myword}".`);
