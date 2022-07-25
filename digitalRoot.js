/* Write a method, digitalRoot(num). It should sum
the digits of a positive integer. If it is greater than
or equal to 10, sum the digits of the resulting number.
Keep repeating until there is only one digit in the result,
 called the "digital root". Do not use string conversion
 within your method.
*/

/* Psuedo code:
  edge case - if num is less than 10 that is the result

  start by having a total = 0
  modululos the num by 10
  now get integer division by Math.floor(num)

*/

function digitalRoot(num) {
  while (num >= 10) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }

  return root;
}

console.log(digitalRoot(46))
