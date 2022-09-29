//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (inputPar) => {

  let output = new Array();
  let _input = inputPar;
  let word = "";
  let word2 = "*";

  let index1 =  0;
  while (index1 < _input.length){
  
    for (let j = 0; j<_input.length; j++){
      word = _input[j];

      let index2 = 0;
      while (index2 < j){

        word2 = word[index2];
        index2++;
        
      }
      
      output.push(word2);
    }
    
    index1++;

  }

  return output;

};
