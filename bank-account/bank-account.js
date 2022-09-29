//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
 
  _balance;
  flag = 1;
  constructor() {
    //throw new Error('Remove this statement and implement this function');
  }

  open() {
    
    if (this._balance >= 0){
      throw new ValueError();
    }

    this.flag += 1;
    if (this.flag % 2 != 0){
      this._balance == undefined;
    }

    this._balance = 0;
    //throw new Error('Remove this statement and implement this function');
  }

  close() {
    if (this._balance == undefined){
      throw new ValueError();
    }
    this._balance = undefined;
  }

  deposit(amount) {
    
    if (this._balance == undefined || amount < 0){
      throw new ValueError();
    }
    this._balance += amount;
    //this.balance;
    //throw new Error('Remove this statement and implement this function');
  }

  withdraw(amount) {

    if (this._balance == undefined || this._balance < amount || amount < 0){
      throw new ValueError();
    }

    this._balance -= amount;
    //throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    
    if (this._balance == undefined){
      throw new ValueError();
    }
    return this._balance;

    //throw new Error('Remove this statement and implement this function');
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
