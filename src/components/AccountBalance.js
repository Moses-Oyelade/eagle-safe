// import React, { useEffect, useState } from "react"

// function AccountBalance() {

// // const [balance, setBalance] = useState(" ")
// // const [transactions, setTransactions] = useState([])


// // const newTransact = [];
    
//    function HandleBalanceClick(e) {
//     e.preventDefault()
//     console.log("clicked Acc Bal:", e.target.value);
//     // setBalance(e.target.value)

//    }

        
//     useEffect(() => {
//         console.log("filter")
//       fetch("http://localhost:3000/transactions")
//       .then((r) => r.json())
//       .then((items) => setTransactions(items))
      
//       // {
//       //   setTransactions(items.reduce((prev, next) => {
//       //     return prev + next }, 0));
//       // })
   
//         }, []);
        
//   // const totalBal = transactions.reduce((prev, next) => {
//   //   return prev + next }, 0);



//   return (
//     <div>
//       <h4>SAVINGS ACCOUNT</h4>
//       <h4>0027856679</h4>
//       <button id="balance" 
//         onClick={HandleBalanceClick}
//       >Account Balance
//       </button>
//       <p></p>
      
//       </div>
//   )
// }

// export default AccountBalance