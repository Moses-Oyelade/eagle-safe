import React from 'react'
import SavingsHistory from "../components/SavingsHistory";
// // import FilterTransaction from '../components/FilterTransaction';


function Details() {

  return (
    <>
    <div>
      <p>This is Details</p>
         <table className="InfoTable" >
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            
            </table>

         </div>
    
     
       <SavingsHistory/>
     </>
     
        )
   
    }

         export default Details