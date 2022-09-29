//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  
  series = "";
  constructor(series) {
    this.series = series;

  }

  slices(sliceLength) {

    let number = this.series.charAt(0);
    let slicesArray = new Array();
    let size = this.series.length;

    if (number == ''){
      throw new Error('series cannot be empty');
    }else if (size < sliceLength){
      throw new Error('slice length cannot be greater than series length');
    }else if (sliceLength == 0){
      throw new Error('slice length cannot be zero');
    }else if (sliceLength < 0){
      throw new Error('slice length cannot be negative');
    }

    let index = 0;
    let i = 0;
    while (i < size){
      
      let _slice = new Array();
      let j = 0;
      while (j < sliceLength){
        
        number = this.series.charAt(index);
        _slice[j] = parseInt(number);

        if (sliceLength > 1){
          number = this.series.charAt(index+1);
        }
        if (number == ''){
          break;
        }

        slicesArray[i] = _slice;
        index++;
        j++;
      }

      if (sliceLength > 1){
        index = i+1;
      }
      if (number == ''){
        break;
      }
      i++;
    }

    console.log(slicesArray);
    return slicesArray;
  }
}