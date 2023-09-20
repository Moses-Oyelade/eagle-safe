import React, {useState} from 'react'

function Form({onAddItem}) {
  const [category, setCategory] = useState("Daily");
  const [errors, setErrors] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  console.log(onAddItem)


  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      date: date,
      description: description,
      amount: amount,
      category: category,
    }

    if(itemData !== 0) {
     
    // setItems([...items, newItem]);
    // setItemData("");
    setDate("")
    setDescription("");
    setAmount("")
      console.log(itemData);

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((newItem) => onAddItem(newItem))
      
      
      
      
    setErrors([]);
  } else {
    setErrors(["Enter all input!"])
  }

  };


  return (
    <div>
    <form  className="NewItem" onSubmit={handleSubmit}> 
      <ul id="list">
         <li>
            <label>
              Category:
             <select id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                <option value="Daily">Daily Savings</option>
                <option value="Weekly">Weekly Savings</option>
                <option value="Monthly">Monthly Savings</option>
              </select>
            </label>
          

            <label>Date:
              <input type="text"
                date ="date"
                placeholder='yyyy-mm-dd'
                value={date}
                onChange={(e) => setDate(e.target.value)}             
              />
            </label>
          </li>
        
          <li> <label>Description:
                <input type="text" 
                  placeholder="description"
                  description="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
          </li>

          <li>
              <label>Amount:
                 <input type="number" 
                  placeholder="Amount"
                  amount="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                 />
              </label>
          </li>
        </ul>
        
        <button type="submit"> Send </button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
        <p key={index} style={{color: "red" }}>
          {error}
        </p>
        ))
      : null}
    </div>
  )
}

export default Form