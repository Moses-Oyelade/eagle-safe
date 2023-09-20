import React, { useEffect, useState} from 'react'
import Data from './Data';
// import Form from '../components/Form'
import FilterTransaction from './FilterTransaction';
// import AccountBalance from './AccountBalance';

const SavingsHistory = ( ) => {

  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions, setTransactions] = useState([]);
  const [newChange, setNewChange] = useState(false)

  
let count = 1

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((items) => setTransactions(items));

  }, [newChange]);


  


  // function handleUpatedTransactions(updatedBalance){
  //   console.log("in balance:", updatedBalance);
  //   const upDatedItems = items.map(item => item.amount).reduce((prev, next) => prev + next);
  //   // return upDatedItem;
  //   setItems(upDatedItems)
  // };
  
  function handleUpatedTransactions(updatedBalance){
    console.log("in balance:", updatedBalance);
    const upDatedItems = transactions.map(transaction => {
      if(transaction.amount === updatedBalance.amount){
        return updatedBalance;
      }else{
        return transaction;
      }}).reduce((prev, next) => prev + next);
    // return upDatedItem;
    setTransactions(upDatedItems)
  };

  
  


  return (
    <>
    <div className="balance">
      {/* <AccountBalance /> */}
      <FilterTransaction  newChange={newChange}
      setNewChange={setNewChange} />
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
                    onUpdatedItem={handleUpatedTransactions}
                    
                    />
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default SavingsHistory