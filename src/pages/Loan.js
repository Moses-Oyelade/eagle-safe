import React, { useState } from 'react'

function Loan() {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [bvn, setBvn] = useState("");
  const [amount, setAmount] = useState("");
  const [submittedData, setSubmittedData] = useState([]);




  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleBvnChange(event) {
    setBvn(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // first name is required
    if (firstName.length > 0) {
      
      const formData ={
        firstName: firstName,
        lastName: lastName,
        bvn: bvn,
        description: description,
        amount: amount,
      };
      console.log(formData)
      const dataArray = [...submittedData, formData];
      
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setBvn("");
      setDescription("");
      setAmount("");
      setErrors([]);
      
    } else {
      setErrors([`All inputs required!`]);
    }
  }
  
  const listOfSubmissions = submittedData.map((data, index) => {
    alert(`You Initiated a Loan request!`)

    return (
            
      <div key={index}>
        <h5>
        Hi, {data.firstName} {data.lastName}, You have submitted
      </h5>
        <table id = "table-loan" style ={{borderBottom:"3px dashed" , marginBottom:"4px"}}>
          <tbody style={{background: "rgb(216, 212, 212)"}}>
          <tr style={{color: "green", textAlign: "justify" }}>&nbsp;&nbsp;Firstname:&nbsp;{data.firstName}</tr>
          <tr style={{color: "green", textAlign: "justify" }}>&nbsp;&nbsp;Lastname: &nbsp;{data.lastName}</tr>
          <tr style={{color: "green", textAlign: "justify" }}>&nbsp;&nbsp;BVN: &nbsp;&nbsp;{data.bvn}</tr>
          <tr style={{color: "green", textAlign: "justify" }}>&nbsp;&nbsp;Desc:&nbsp;&nbsp;{data.description}</tr>
          <tr style={{color: "green", textAlign: "justify" }}>&nbsp;&nbsp;Amount:   &nbsp;{data.amount}</tr>
          </tbody>
        </table>
      </div>
    );
  });
 
  return (
    <div  id='loan'>
      <h2>LOAN REQUEST</h2>
      <p>Please Fill Loan Form</p>
      <form id="loan-form" onSubmit={handleSubmit}>
        
            <input type="text" placeholder='Firstname' onChange={handleFirstNameChange} value={firstName} />
            
            <input type="text" placeholder="Lastname" onChange={handleLastNameChange} value={lastName} />
            
            <input itemType='number'
                placeholder='BVN'
                bvn ="bvn"
                value={bvn}
                onChange={handleBvnChange} 
            />

            <input type="text" 
            placeholder="Description"
            description="description"
            value={description}
            onChange={handleDescriptionChange}
             />
             
            <input type="number" 
            placeholder="Amount"
            amount="amount"
            value={amount}
            onChange={handleAmountChange}
            />
           
      <button type="submit"> SUBMIT </button>
    </form>
    {/* conditionally render error messages */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submissions</h3>
    {listOfSubmissions}

    </div>
  )
}

export default Loan