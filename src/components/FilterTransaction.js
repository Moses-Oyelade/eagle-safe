import React from 'react'

const FilterTransaction = ({ setTransactions }) => {

    // const [search, setSearch] = useState("")

    function filterByCategory (e) {
        e.preventDefault();
        setInputText(e.target.value)
        fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then((transactions) => {
            setTransactions(transactions.filter((transaction) => {
              if((transaction.category).toLowerCase().includes(inputText.toLowerCase())
                )
              return transactions
            }))
              
        })

    
    }

  return (
    <div>
        <h3>Filter By Category</h3>
        <div id="filter-search">
            <input type="text"
            name="filter"
            onChange={filterByCategory}
            value={inputText}
            placeholder="Search..."
            />
       
        </div>
    </div>
  )
}

export default FilterTransaction