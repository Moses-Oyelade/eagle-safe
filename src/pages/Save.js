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
            <h1>INITIATE SAVINGS</h1>
            
            <Form  onAddItem={handleAddItem} />
 
          </div>
  )
}

export default Safe