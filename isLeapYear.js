function isLeapYear
let year = 2000;
if (year % 4 === 0) && (year % 400 === 0){
  console.log('This is a leap year')
}
else (console.log('This is not a leap year'))