//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  tonic = "";
  constructor(tonic) {
    this.tonic = tonic;
    
  }

  chromatic() {

    var sharps = "A, A#, B, C, C#, D, D#, E, F, F#, G, G#";
    var sharpsNotes = sharps.split(", ");

    var flats = "A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab";
    var flatsNotes = flats.split(", ");
    var nodes = [];

    if (this.tonic == 'C'){
      nodes = sharpsNotes;
    }else {
      nodes = flatsNotes;
    }

    var newNodes = [];

    for (let i=0; i<nodes.length; i++){

      if (nodes[i] == this.tonic){

        var j = 0;
        while (j < nodes.length){
          newNodes[j] = nodes[j+i];
          j++;
          if ( j == (nodes.length - i)){
            for ( let k = 0; k< (i); k++ ){
              newNodes[k+j] = nodes[k];
            }
            break;
          }
        }
         
      }
      
    }

    return newNodes;

  }

  interval(intervals) {

    var majorSharp = "G, D, A, E, B, F#";
    var majorSNotes = majorSharp.split(", ");
    var majorSScale = "A, B, C, D, E, F#, G";

    var minorSharp = "e, b, f#, c#, g#, d#";
    var minorSNotes = minorSharp.split(", ");
    var minorSScale = "A, B, C#, D#, "

    var majorFlap = "F, Bb, Eb, Ab, Db, Gb";
    var majorFNotes = majorFlap.split(", ");

    var minorFlap = "d, g, c, f, bb, eb";
    var minorFNotes = minorFlap.split(", ");

    var simple = "A, B, C, D, E, F, G";
    var simpleNotes = simple.split(", ");

    var notes = [];

    for (let a = 0; a<sharpsNotes.length; a++){
      
      if (this.tonic == 'C' || this.tonic == 'a'){
        notes = simpleNotes;
        break;
      } else if (this.tonic == majorSNotes[a]){
        notes = sharpsNotes;
        break;
      }else if (this.tonic == majorFNotes[a] || this.tonic == minorFNotes[a]) {
        notes = flatsNotes;
        break;
      }else if (this.tonic == minorSNotes[a]){
        notes 
      }
    }

    var newNodes = [];

    for (let i=0; i<notes.length; i++){

      if (notes[i] == this.tonic){

        var j = 0;
        while (j < notes.length){
          newNodes[j] = notes[j+i];
          j++;
          if ( j == (notes.length - i)){
            for ( let k = 0; k< (i); k++ ){
              newNodes[k+j] = notes[k];
            }
            break;
          }
        }
      }
    }

    return newNodes;
    
  }
}
