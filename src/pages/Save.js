import React, {useState} from 'react'
import Form from '../components/Form'


function Safe() {

  const [items, setItems] = useState([]);


  function handleAddItem(newItems){
    console.log("in Savings history:", newItems)
    setItems({...items, newItems })
  }


  return (
          <div id = "saving">
            <h2>INITIATE SAVINGS</h2>
            
            <Form  onAddItem={handleAddItem} />
 
          </div>
  )
}

export default Safe