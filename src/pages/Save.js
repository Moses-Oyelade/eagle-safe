import React from 'react'


function Safe() {

  const { date, description, category, amount} = transaction;

  return (
    (
        <tr className="transData">
            <td>{count}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
  )
  )
}

export default Safe