//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (number) => {
  
  var strRomans = "I, II, III, IV, V, VI, VII, VIII, IX, X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M, MM, MMM";
  var romans = strRomans.split(", ");
  var strNumbers = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000";
  var numbers = strNumbers.split(", ");
  var roman = "";
  var num = ""+number;
  
  var thousand = 0;
  var hundrend = 0;
  var tenth = 0;
  var digit = 0;

  var j = num.length;
  while (j > 0){

    if (j == num.length){
      digit = parseInt(num.charAt(--j)); 

    } else if (j >= num.length-1){
      tenth = parseInt(num.charAt(--j)) * 10;

    } else if (j >= num.length-2){
      hundrend = parseInt(num.charAt(--j)) * 100;  

    } else if (j >= num.length-3){
      thousand = parseInt(num.charAt(--j)) * 1000;

    }

  }

  for (var i = romans.length-1; i >= 0; i-- ){
    
    if (thousand == parseInt(numbers[i]) ){
      roman += romans[i];
    }

    if (hundrend == parseInt(numbers[i]) ){
      roman += romans[i];
    }

    if (tenth == parseInt(numbers[i]) ){
      roman += romans[i];
    } 

    if (digit == parseInt(numbers[i]) ){
      roman += romans[i];
    }

  }

  return roman;

}
