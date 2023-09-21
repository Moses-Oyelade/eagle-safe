// import React from 'react'

// function AccountBalance({ setTransactions, transactions}) {

// // const [Balance, setBalance] = useState(" ")




// //   function handleNewBalanceClick(e){ 
// //     e.preventDefault();
// //      console.log("clicked Acc Bal:", transaction);


// //     fetch(`http://localhost:3000/transactions/${transactions.id}`,{
// //       method: "PATCH",
// //       headers:{
// //         "Content-Type" : "application/json",
// //       },
// //       body : JSON.stringify({transactions: {amount: amount}})
// //     })
// //     .then(res => console.log(res))
// //     .then(updatedItem =>  onUpdatedItem(updatedItem))

// //     // setBalance()

// function handleUpdatedTransactions(updatedBalance){
//     console.log("in balance:", updatedBalance);
//     const upDatedItems = transactions.map(item => item.amount).reduce((prev, next) => prev + next);
//      console.log(upDatedItems);
//     setTransactions(upDatedItems)
//     return upDatedItems;
//   };

    
// // }

// // // console.log(transactions.map(amount).reduce(sum));
 





//   return (
//     <div>
//       <h4>SAVINGS ACCOUNT</h4>
//       <h4>0027856679</h4>
//       <button id="balance" 
//         onClick={handleUpdatedTransactions}
//       >Account Balance
//       </button>
//       <p>{updatedBalance}</p>
      
//       </div>
//   )
// }

// export default AccountBalance