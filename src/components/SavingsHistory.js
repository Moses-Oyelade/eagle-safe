import React, { useEffect, useState} from 'react'
import Data from './Data';
import Form from '../components/Form'

const SavingsHistory = ( ) => {

  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  
let count = 1

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((transactions) => setItems(transactions));

  }, []);


  function handleAddItem(newItems){
    console.log("in Savings history:", newItems)
    setItems({...items, newItems })
  }


  function handleUpatedTransactions(updatedBalance){
    console.log("in balance:", updatedBalance);
    const upDatedItems = items.map(item => item.amount).reduce((prev, next) => prev + next);
    // return upDatedItem;
    setItems(upDatedItems)
  };
  
    

  
  


  return (
    <>
    <Form  onAddItem={handleAddItem} />
    <div className="history">
      <h2>Savings History</h2>
      <table className="Infotable" >
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
              
                {items.map((item) => (
                <Data key={item.id}
                        count={count++}
                        item={item}
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