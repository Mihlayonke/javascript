//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (number) => {

  let numbers = [];
  if (number <= 1){
    return numbers;
  }

  let count = 0;
  let index = 0;
  let j = 0;
  
  for (let i=2 ; i<=number; i++){

    count = 0;
    j = 1;
    while (j <= i && index < i){
      if (i % j == 0){
        count++;
      }
      j++;
    }

    if (count == 2){
      numbers[index] = i;
      index++;
    }
  }
  
  return numbers;

};
 