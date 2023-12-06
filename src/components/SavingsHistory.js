import React, { useEffect, useState} from 'react'
import Data from './Data';
// import Form from '../components/Form'
import FilterTransaction from './FilterTransaction';
// import AccountBalance from './AccountBalance';

const SavingsHistory = ( ) => {

  const [transactions, setTransactions] = useState([]);
  const [newChange, setNewChange] = useState(false)

  
let count = 1

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((items) => setTransactions(items));

  }, [newChange]);


  // function HandleBalanceClick() {

  const totalBal = transactions.map(transaction => transaction.amount).reduce((accumulator, current) => accumulator + current, 0);
 console.log(`Balance ${totalBal}`)
 
  // }

//  let sum = 0;

//  transactions.forEach(transaction => {
//   sum += transaction.amount;
//  })


  
  


  return (
    <>
    <div className="balance">
      <div className="acount-bal">
      <h4>SAVINGS ACCOUNT</h4>
      <h4>0027856679</h4>
      <button id="balance" 
      >Account Balance
      </button>
      <p>$ {totalBal}</p>
      {/* <p>{sum}</p> */}

      </div>

      <FilterTransaction  newChange={newChange}
      setNewChange={setNewChange}
      setTransactions={setTransactions} 
      />
    </div>
    <div className="history">
      <h2>Savings History</h2>
      <table className="Infotable" >
            <thead>
                <tr id="Infotable">
                    <th>S/N</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
              
                {transactions.map((transaction) => (
                <Data key={transaction.id}
                        count={count++}
                        transaction={transaction}
                    // onUpdatedItem={handleUpatedTransactions}
                    
                    />
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default SavingsHistory