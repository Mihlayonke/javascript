//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (p < 0 || g > 9999){
      throw new Error();
    }
  }

  DiffieHellman(p, g){
    
  }

  getPublicKey(privateKey) {
    throw new Error('Remove this statement and implement this function');
  }

  getSecret(theirPublicKey, myPrivateKey) {
    throw new Error('Remove this statement and implement this function');
  }
}
