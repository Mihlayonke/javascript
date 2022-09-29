//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {

  if (num == 0 || num < 0){
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sum = 0;
  let results = "";

  for (let i=0; i<num; i++){

    if (num % i == 0){
      sum += i;
    }
  }

  if (sum == num){
    results = "perfect";
  }else if (sum > num){
    results = "abundant";
  }else if (sum < num){
    results = "deficient"
  }

  return results;
};
