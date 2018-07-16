import React from 'react';

export const BankComponent = (props) => {
    return (
       <div>
          <h1>Your transaction history is {props.balance}</h1>
          <h1>Your total Deposit is {props.totalValue}</h1>
          <div className="atm">
          <button onClick={() => props.withdraw(2)}>Withdraw</button>
          <button onClick={() => props.deposit(10)}>Deposit</button>
      </div> </div>
    );
}
