const names = ['Alice', 'Bob', 'Charlie'];
const phoneNumbers = ['555-1234', '555-5678', '555-9012'];

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < phoneNumbers.length; j++) {
    console.log(`${names[i]}: ${phoneNumbers[j]}`);
  }
}
