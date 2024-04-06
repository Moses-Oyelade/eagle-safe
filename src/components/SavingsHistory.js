import React, { useEffect, useState} from 'react'
import Data from './Data';
// import Form from '../components/Form'
import FilterTransaction from './FilterTransaction';
// import AccountBalance from './AccountBalance';

const SavingsHistory = ( ) => {

  const [transactions, setTransactions] = useState([]);
  const [newChange, setNewChange] = useState(false);
  const [isOn, setIsOn] = useState(false);


  
  let count = 1;

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((items) => setTransactions(items));

  }, [newChange]);


  function handleBalanceClick() {
    setIsOn((isOn) => !isOn)
  };


const totalBal = transactions.map(transaction => (transaction.amount)).reduce((accumulator, current) => accumulator + current, 0);
console.log(`Balance ${totalBal}`)

const accountBal = isOn ? "account-hide" : "account-show ";

 
  return (
    <>
    <div className="balance">
      <div className="acount-bal">
      <h4>SAVINGS ACCOUNT</h4>
      <h4>0027856679</h4>
      <button id="balance" 
        onClick={handleBalanceClick}
      >{isOn ? "Show Bal." : "Hide Bal."}
      </button>
      <p className={accountBal}>$ {totalBal}</p>

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
                    />
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default SavingsHistory