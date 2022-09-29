//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {

  var digits = ""+number;
  var sum = 0;
  var power = digits.length;
  var base = 0;

  for (let i = 0; i< digits.length; i++){
    base = parseInt(digits.charAt(i));
    sum += base ** power;
  }

  return (sum == number);

};
