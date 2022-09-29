//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {

  let _count = 0;
  const wordsList = words.split("\t", "\n", " ");
  let _word = wordsList[0];
  let expCounts = new Object(new Object(words.split(" ")));
  
  for (let i=1; i<wordsList.length; i++){
    
    if (wordsList[i] != ""){
      _word = wordsList[i];

      for (let j=0; j<wordsList.length; j++){
        if (wordsList[i] == _word){
          _count++;
        }
      }

      //expCounts._word = _count;
    }

  }
  
  return expCounts;

}
