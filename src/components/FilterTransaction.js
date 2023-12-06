import React, { useEffect, useState} from 'react'

const FilterTransaction = ({ setTransactions }) => {

    const [search, setSearch] = useState("")

    function handleFilterChange (e) {
        e.preventDefault();
        console.log(e.target.value)
        setSearch(e.target.value)

    }

        useEffect(() => {
          console.log("filter")
        fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then((items) => {
            setTransactions(items.filter((transaction) => {
              if((transaction.category).toLowerCase().includes(search.toLowerCase())
                )
              return transaction;
            }))

            return true;
              
        })

    
    },[search, setTransactions])
  

  return (
    <div className="new-transaction">
        <h3>Filter By Category</h3>
        <div id="filter-search">
            <input type="text"
            name="filter"
            onChange={handleFilterChange}
            value={search}
            placeholder="Search..."
            />
       
        </div>
    </div>
  )
}

export default FilterTransaction