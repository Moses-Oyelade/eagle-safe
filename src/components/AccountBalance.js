import React from 'react'

function AccountBalance({ onUpdatedItem}) {

// const [Balance, setBalance] = useState()




  function handleNewBalance(e){ 


    fetch(`http://localhost:3000/transactions/${transactions.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({transactions: {amount: amount}})
    })
    .then(res => console.log(res))
    .then(updatedItem =>  onUpdatedItem(updatedItem))

    // setBalance()

    

    
}

// console.log(transactions.map(amount).reduce(sum));
 





  return (
    <div>
      <h4>SAVINGS ACCOUNT</h4>
      <h4>0027856679</h4>
      <button id="balance" 
        onClick={handleNewBalance}
      >Account Balance
      </button>
      <p></p>
      
      </div>
  )
}

export default AccountBalance