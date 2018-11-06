
'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(par: number) {
  let details: any[] = [];
  accounts.forEach(e => {
    if (e.accountNumber === par) {
      details.push(e.clientName);
      details.push(e.balance);
    }
  });
  console.log(details);
}
getNameAndBalance(11234543);


function transferAmount(obj: any[], fromA: number, toA: number, amnt: number) {
  if (obj.filter(e => e.accountNumber === fromA || e.accountNumber === toA).length == 2) {
    obj.forEach(e => {
      if (e.accountNumber === fromA) {
        // console.log('cica');

        e.balance -= amnt;
      } else if (e.accountNumber === toA) {
        e.balance += amnt;
      }
    });
    return obj;
  } else console.log('404 - account not found');
}
transferAmount(accounts, 11234543, 23456311, 1000.0);
console.log(accounts);

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};